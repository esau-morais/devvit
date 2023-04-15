import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

export const devvitsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.devvit.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }),
});
