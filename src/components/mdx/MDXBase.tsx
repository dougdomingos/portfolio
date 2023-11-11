import { MDXComponents } from 'mdx/types';

import { InlineCode } from './Code';

const components: MDXComponents = {
  p: ({ children }) => <p className='text-lg mb-3'>{children}</p>,

  h1: ({ children }) => (
    <h1 className='text-4xl font-bold font-display mb-2'>{children}</h1>
  ),

  h2: ({ children }) => (
    <h2 className='text-3xl font-bold font-display mb-1.5'>{children}</h2>
  ),

  h3: ({ children }) => (
    <h3 className='text-2xl font-bold font-display mb-1'>{children}</h3>
  ),

  ol: ({ children }) => (
    <ol className='list-decimal pl-8 flex flex-col gap-2 mb-4'>{children}</ol>
  ),

  ul: ({ children }) => (
    <ul className='list-disc pl-8 flex flex-col gap-2 mb-4'>{children}</ul>
  ),

  InlineCode: InlineCode,
};

export default components;
