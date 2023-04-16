import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

export const devvitsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.devvit.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }),
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const devvit = await ctx.prisma.devvit.findUnique({
        where: { id: input.id },
      });

      if (!devvit) throw new TRPCError({ code: 'NOT_FOUND' });

      return devvit;
    }),
});
