import TRPCWrapper from '@/components/tRPCWrapper';
import { ClerkProvider } from '@clerk/nextjs/app-beta';
import { type ReactNode } from 'react';
import '@/styles/globals.css';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <head />
        <body>
          <TRPCWrapper>{children}</TRPCWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
