'use client';

import { api } from '@/utils/api';
import { Separator } from './ui/Separator';
import { ChevronUp } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Skeleton } from './ui/Skeleton';
import AuthorHoverCard from './AuthorHoverCard';

export const Devvits = () => {
  const router = useRouter();
  const { data, isLoading: devvitsLoading } = api.devvits.getAll.useQuery();

  if (devvitsLoading)
    return (
      <div className="space-y-2" aria-label="loading...">
        {Array.from({ length: 12 }).map((_, index) => (
          <Skeleton key={index} className="h-16 w-full rounded-md" />
        ))}
      </div>
    );

  if (!data) toast.error('could not retrieve devvits this time :(');

  return (
    <div className="grid columns-1 gap-2">
      {data?.map((fullPost) => (
        <article
          key={fullPost.post.id}
          className="flex w-full cursor-pointer items-start space-x-2 border bg-card p-2 shadow-sm dark:bg-card md:rounded-md"
        >
          <aside className="flex flex-col items-center rounded-l-md border border-zinc-300 p-1 dark:border-slate-700">
            <ChevronUp className="cursor-pointer" />
            <Separator />
            <span className="text-lg">11</span>
          </aside>
          <div
            className="grid overflow-hidden"
            onClick={() => router.push(`/d/${fullPost.post.id}`)}
          >
            <header className="inline-flex items-center gap-2">
              <small>
                Posted by <AuthorHoverCard {...fullPost.author} />
              </small>
              <small aria-label="devvit date">
                {Intl.DateTimeFormat('en-UK').format(
                  new Date(fullPost.post.createdAt)
                )}
              </small>
            </header>

            <h3 className="line-clamp-1 w-fit scroll-m-20 text-lg font-medium tracking-tight">
              {fullPost.post.title}
            </h3>
            <p className="mt-2 line-clamp-5 text-sm">{fullPost.post.content}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
