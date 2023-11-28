import Link from 'next/link';

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

  ol: ({ children }) => <ol className='list-decimal pl-6'>{children}</ol>,

  ul: ({ children }) => <ul className='list-disc pl-6'>{children}</ul>,

  li: ({ children }) => <li className='mb-2 text-lg'>{children}</li>,

  pre: CodeBlock,
};
