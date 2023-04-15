'use client';

import { api } from '@/utils/api';
import { type ReactNode } from 'react';
import { TopBar } from './TopBar';

export const TRPCWrapper = api.withTRPC(
  ({ children }: { children: ReactNode }) => {
    return (
      <>
        <TopBar />

        <main>{children}</main>
      </>
    );
  }
);
