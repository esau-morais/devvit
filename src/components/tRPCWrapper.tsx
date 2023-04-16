'use client';

import { api } from '@/utils/api';
import { type ReactNode } from 'react';
import { TopBar } from './TopBar';
import { ThemeProvider } from 'next-themes';

export const TRPCWrapper = api.withTRPC(
  ({ children }: { children: ReactNode }) => {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TopBar />

        <main className="mx-auto max-w-3xl py-4 xl:max-w-4xl">{children}</main>
      </ThemeProvider>
    );
  }
);
