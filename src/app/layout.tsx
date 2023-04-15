import { TRPCWrapper } from '@/components/tRPCWrapper';
import { ClerkProvider } from '@clerk/nextjs/app-beta';
import { type ReactNode } from 'react';
import { Space_Grotesk } from 'next/font/google';
import { cn } from '@/utils/classNames';

import '@/styles/globals.css';

const fontSpaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space_grotesk',
  display: 'swap',
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <head />
        <body
          className={cn(
            'bg-[#EBEBEB] font-sans dark:bg-[#131313]',
            fontSpaceGrotesk.variable
          )}
        >
          <TRPCWrapper>{children}</TRPCWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
