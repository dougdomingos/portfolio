import { HTMLAttributes } from 'react';

import clsx from 'clsx';

const Container = ({ children, className }: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx('w-full max-w-[1200px]', className)}>{children}</div>
);

export default Container;
