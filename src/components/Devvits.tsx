'use client';

import { api } from '@/utils/api';
import Link from 'next/link';
import { Separator } from './ui/Separator';
import { useState } from 'react';
import { cn } from '@/utils/classNames';
import { Button } from '@/components/ui/Button';
import { ChevronUp, LayoutGrid } from 'lucide-react';
import { LayoutList } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

type Layout = 'list' | 'grid';

export const Devvits = () => {
  const router = useRouter();
  const [currentLayout, setCurrentLayout] = useState<Layout>('list');
  const { data, isLoading: devvitsLoading } = api.devvits.getAll.useQuery();

  if (devvitsLoading)
    return (
      <>
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className="inline-block h-12 w-full animate-pulse bg-white dark:bg-secondary"
          />
        ))}
      </>
    );

  if (!data) toast.error('could not retrieve reddits this time :(');

  return (
    <div
      className={cn(
        'grid columns-1 gap-2 space-x-2',
        currentLayout !== 'list'
          ? 'md:columns-2 lg:columns-3 xl:columns-4'
          : null
      )}
    >
      <div
        className={cn(
          'inline-flex justify-self-end rounded-md bg-primary dark:bg-primary',
          currentLayout === 'grid'
            ? 'md:col-span-2 lg:col-span-3 xl:col-span-4'
            : null
        )}
      >
        <Button
          variant="ghost"
          disabled={currentLayout === 'list'}
          onClick={() => setCurrentLayout('list')}
        >
          <LayoutList width={16} height={16} />
        </Button>
        <Separator orientation="vertical" className="mx-1.5 h-5 self-center" />
        <Button
          variant="ghost"
          disabled={currentLayout === 'grid'}
          onClick={() => setCurrentLayout('grid')}
        >
          <LayoutGrid width={16} height={16} />
        </Button>
      </div>

      {data?.map((fullPost) => (
        <article
          key={fullPost.post.id}
          className="inline-flex w-full cursor-pointer items-center space-x-2 rounded-md bg-card p-2 dark:bg-card"
          onClick={() => router.push(`/d/${fullPost.post.id}`)}
        >
          <div className="flex flex-col items-center rounded-l-md border border-zinc-300 p-1 dark:border-slate-700">
            <ChevronUp />
            <Separator />
            <span className="text-lg">11</span>
          </div>
          <div className="flex flex-col">
            <small>d/{fullPost?.author?.username.split('-')[0]}</small>
            <h2 className="line-clamp-1 w-fit">{fullPost.post.title}</h2>
          </div>

          {currentLayout === 'list' ? (
            <>
              <Separator />

              <span aria-label="devvit date">
                {Intl.DateTimeFormat('en-UK').format(
                  new Date(fullPost.post.createdAt)
                )}
              </span>
            </>
          ) : null}
        </article>
      ))}
    </div>
  );
};
