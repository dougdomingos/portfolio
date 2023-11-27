import { PropsWithChildren } from 'react';

import clsx from 'clsx';

const InlineCode = ({ children }: PropsWithChildren) => (
  <code
    className={clsx(
      'font-mono font-bold p-1 rounded-md whitespace-nowrap',
      'bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light',
    )}>
    {children}
  </code>
);

export { InlineCode };
