import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

import Header from '@components/layout/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
