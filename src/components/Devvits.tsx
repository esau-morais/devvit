'use client';

import { api } from '@/utils/api';
import Link from 'next/link';
import { Separator } from './ui/Separator';
import { useState } from 'react';
import { cn } from '@/utils/classNames';
import { Button } from '@/components/ui/Button';
import { LayoutGrid } from 'lucide-react';
import { LayoutList } from 'lucide-react';

type Layout = 'list' | 'grid';

export const Devvits = () => {
  const [currentLayout, setCurrentLayout] = useState<Layout>('list');
  const { data, isLoading: devvitsLoading } = api.devvits.getAll.useQuery();

  if (devvitsLoading) return <div>loading...</div>;

  if (!data) return <div>could not retrieve reddits this time :(</div>;

  return (
    <div
      className={cn(
        'mx-auto mt-4 grid max-w-3xl gap-2 space-x-2',
        currentLayout === 'list' ? 'columns-1' : 'columns-3'
      )}
    >
      <div
        className={cn(
          'inline-flex justify-self-end rounded-md bg-zinc-100 dark:bg-slate-600',
          currentLayout === 'grid' ? 'col-span-3' : null
        )}
      >
        <Button variant="ghost" disabled={currentLayout === 'list'}>
          <LayoutList
            width={16}
            height={16}
            onClick={() => setCurrentLayout('list')}
          />
        </Button>
        <Separator orientation="vertical" className="mx-1.5 h-5 self-center" />
        <Button
          variant="ghost"
          disabled={currentLayout === 'grid'}
          aria-disabled={currentLayout === 'grid'}
          onClick={() => setCurrentLayout('grid')}
        >
          <LayoutGrid width={16} height={16} />
        </Button>
      </div>

      {data.map((fullPost) => (
        <Link
          key={fullPost.id}
          className="inline-flex w-full items-center space-x-2 rounded-md bg-white p-2 dark:bg-slate-700"
          href={`/d/${fullPost.id}`}
        >
          <div className="flex flex-col">
            <small>r/user</small>
            <h2 className="line-clamp-1 w-fit">{fullPost.title}</h2>
          </div>

          <Separator />

          <span aria-label="devvit date">
            {Intl.DateTimeFormat('en-UK').format(new Date(fullPost.createdAt))}
          </span>
        </Link>
      ))}
    </div>
  );
};
