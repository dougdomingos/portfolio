'use client';

import { HTMLAttributes } from 'react';

const CodeBlock = ({ className, children }: HTMLAttributes<HTMLElement>) => (
  <pre className={className}>{children}</pre>
);

export default CodeBlock;
