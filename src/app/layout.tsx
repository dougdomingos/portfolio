'use client';

import { Inter, Poppins, Roboto_Mono } from 'next/font/google';

import ScrollUpButton from '@components/ScrollUpButton';
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

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={clsx(inter.variable, poppins.variable, robotoMono.variable)}>
        <ThemeProvider
          attribute='class'
          enableSystem={false}
          defaultTheme='light'>
          <Header />
          <main className='relative flex justify-center px-4'>{children}</main>
          <Wave className='absolute bottom-0 fill-primary max-h-32 w-full' />
        </ThemeProvider>
        <ScrollUpButton />
      </body>
    </html>
  );
}
