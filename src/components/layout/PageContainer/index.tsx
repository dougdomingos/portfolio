import { HTMLAttributes, ReactElement } from 'react';

import clsx from 'clsx';

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement;
}

const PageContainer = ({ children, className }: PageContainerProps) => (
  <div className={clsx('w-full max-w-[1200px]', className)}>{children}</div>
);

export default PageContainer;
