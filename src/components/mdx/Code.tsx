import { PropsWithChildren } from 'react';

import clsx from 'clsx';

const InlineCode = ({ children }: PropsWithChildren) => (
  <code
    className={clsx(
      'font-mono p-1 whitespace-nowrap text-primary-dark font-bold bg-primary-light rounded-md',
      'dark:text-primary-light dark:bg-primary-dark'
    )}>
    {children}
  </code>
);

export { InlineCode };
