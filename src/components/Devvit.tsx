'use client';

import { api } from '@/utils/api';

export const Devvit = ({ id }: { id: string }) => {
  const { data, isLoading: devvitLoading } = api.devvits.getById.useQuery({
    id: Number(id),
  });

  if (devvitLoading) return <div>loading...</div>;

  if (!data) return <div>could not retrieve reddits this time :(</div>;

  return <>{data.post.title}</>;
};
