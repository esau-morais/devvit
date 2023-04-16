import { TRPCWrapper } from '@/components/tRPCWrapper';
import { type ReactNode } from 'react';
import { Space_Grotesk } from 'next/font/google';
import { cn } from '@/utils/classNames';

import '@/styles/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

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
    <html lang="en">
      <head />
      <body
        className={cn(
          'min-h-screen w-full bg-light font-sans dark:bg-dark',
          fontSpaceGrotesk.variable
        )}
      >
        <TRPCWrapper>
          {children}
          {modal}
        </TRPCWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
