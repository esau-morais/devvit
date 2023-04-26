import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { clerkClient } from '@clerk/nextjs/server';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

export const profilesRouter = createTRPCRouter({
  getUserByEmail: publicProcedure
    .input(z.object({ email: z.string() }))
    .query(async ({ input }) => {
      const [user] = await clerkClient.users.getUserList({
        emailAddress: [input.email],
      });

      if (!user) throw new TRPCError({ code: 'NOT_FOUND' });

      return user;
    }),
});
