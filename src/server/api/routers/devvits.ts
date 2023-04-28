import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from '@/server/api/trpc';
import { filterUserForClient } from '@/server/helpers/filterUserForClient';
import { clerkClient } from '@clerk/nextjs/server';
import { type Devvit } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

const addUserDataToPosts = async (devvits: Devvit[]) => {
  const userId = devvits.map((post) => post.authorId.toString());
  const users = (
    await clerkClient.users.getUserList({
      userId: userId,
    })
  ).map(filterUserForClient);

  return devvits.map((post) => {
    const author = users.find((user) => user.id === post.authorId);

    if (!author) {
      console.error('AUTHOR NOT FOUND', post);
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: `Author for devvit not found. POST ID: ${post.id}, USER ID: ${post.authorId}`,
      });
    }
    if (!author.username) {
      // user the ExternalUsername
      if (!author.externalUsername) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: `Author has no GitHub Account: ${author.id}`,
        });
      }
      author.username = author.externalUsername;
    }
    return {
      post,
      author: {
        ...author,
        username: author.username ?? '(username not found)',
      },
    };
  });
};

export const devvitsRouter = createTRPCRouter({
  create: privateProcedure
    .input(
      z.object({
        title: z.string().min(1).max(300),
        content: z.string().nullish(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      const devvit = await ctx.prisma.devvit.create({
        data: {
          authorId,
          ...input,
        },
      });

      return devvit;
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    const devvits = await ctx.prisma.devvit.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return addUserDataToPosts(devvits);
  }),
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const devvit = await ctx.prisma.devvit.findUnique({
        where: { id: input.id },
      });

      if (!devvit) throw new TRPCError({ code: 'NOT_FOUND' });

      return (await addUserDataToPosts([devvit]))[0];
    }),
});
