import Link from 'next/link';

import clsx from 'clsx';
import type { MDXComponents } from 'mdx/types';

import CodeBlock from './CodeBlock';

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className='text-4xl font-display font-bold mb-[0.25em]'>{children}</h1>
  ),

  h2: ({ children }) => (
    <h2 className='text-3xl font-display font-bold mb-[0.25em]'>{children}</h2>
  ),

  h3: ({ children }) => (
    <h3 className='text-2xl font-display font-bold mb-[0.25em]'>{children}</h3>
  ),

  p: ({ children }) => <p className='text-lg mb-4'>{children}</p>,

  a: ({ href, children }) => (
    <Link
      href={href!}
      className='underline font-bold text-primary-dark dark:text-primary'>
      {children}
    </Link>
  ),

  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className='w-full max-w-[600px] mx-auto mb-[1.8em] shadow-xl dark:shadow-none rounded-lg'
    />
  ),

  ol: ({ children }) => (
    <ol className='list-decimal pl-6 mb-[1.25em]'>{children}</ol>
  ),

  ul: ({ children }) => (
    <ul className='list-disc pl-6 mb-[1.25em]'>{children}</ul>
  ),

  li: ({ children }) => <li className='mb-2 text-lg'>{children}</li>,

  pre: CodeBlock,
};
