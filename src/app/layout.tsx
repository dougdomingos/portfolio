'use client';

import { Inter, Poppins } from 'next/font/google';

import Wave from '@components/Wave';
import Header from '@components/layout/Header';
import clsx from 'clsx';
import { ThemeProvider } from 'next-themes';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          inter.variable,
          poppins.variable,
          'font-sans relative min-h-screen pb-28',
        )}>
        <ThemeProvider attribute='class' enableSystem={false} defaultTheme='light'>
          <Header />
          <main className='relative flex justify-center px-4'>{children}</main>
          <Wave className='absolute bottom-0 fill-primary max-h-32 w-full' />
        </ThemeProvider>
      </body>
    </html>
  );
}
