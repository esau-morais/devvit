'use client';

import { api } from '@/utils/api';
import { type ReactNode } from 'react';

const TRPCWrapper = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default api.withTRPC(TRPCWrapper);
