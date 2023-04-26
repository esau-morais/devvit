import { ClerkProvider } from '@clerk/nextjs/app-beta';
import { TRPCWrapper } from '@/components/tRPCWrapper';
import { type ReactNode } from 'react';
import { Space_Grotesk } from 'next/font/google';
import { cn } from '@/utils/classNames';

import '@/styles/globals.css';

const fontSpaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space_grotesk',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Devvit',
    template: '%s | Devvit',
  },
};

const RootLayout = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <head />
        <body
          className={cn(
            'min-h-screen w-full bg-background font-sans dark:bg-background',
            fontSpaceGrotesk.variable
          )}
        >
          <TRPCWrapper>
            {children}
            {modal}
          </TRPCWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
