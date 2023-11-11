import { Inter, Poppins } from 'next/font/google';

import Header from '@components/layout/Header';
import clsx from 'clsx';
import type { Metadata } from 'next';

import './globals.css';
import Wave from '@components/Wave';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Douglas Domingos | Portfolio',
  description:
    'Software Developer and Computer Science student at Federal University of Campina Grande (UFCG)',
  keywords: ['portfolio', 'fullstack', 'developer', 'UFCG'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsx(inter.variable, poppins.variable, 'font-sans relative min-h-screen pb-28')}>
        <Header />
        <main className='relative flex justify-center px-4'>{children}</main>
        <Wave className='absolute bottom-0 fill-primary max-h-32 w-full' />
      </body>
    </html>
  );
}
