'use client';

import { api } from '@/utils/api';

export const Devvits = () => {
  const { data, isLoading: devvitsLoading } = api.devvits.getAll.useQuery();

  if (devvitsLoading) return <div>loading...</div>;

  if (!data) return <div>could not retrieve reddits this time :(</div>;

  return <>{data.map((fullPost) => fullPost.title)}</>;
};
