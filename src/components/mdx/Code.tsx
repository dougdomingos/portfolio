import { PropsWithChildren } from 'react';

const InlineCode = ({ children }: PropsWithChildren) => (
  <code className='font-mono p-1 whitespace-nowrap text-primary-dark font-bold bg-primary-light rounded-md'>
    {children}
  </code>
);

export { InlineCode };
