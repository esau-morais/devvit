'use client';

import { api } from '@/utils/api';
import { type ReactNode } from 'react';
import { TopBar } from './TopBar';

export const TRPCWrapper = api.withTRPC(
  ({ children, modal }: { children: ReactNode }) => {
    return (
      <>
        <main>{children}</main>
        {modal}
      </>
    );
  }
);
