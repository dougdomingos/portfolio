import { HTMLAttributes, PropsWithChildren } from 'react';

import clsx from 'clsx';

interface CardProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

const Card = (props: CardProps) => {
  return (
    <article
      {...props}
      className={clsx(
        props.className,
        'flex flex-col overflow-hidden rounded-md bg-white-light p-4',
        'shadow-md hover:shadow-lg hover:ring-2 hover:ring-primary hover:-translate-y-1',
        'transition-[transform,box-shadow] duration-300',
        'dark:shadow-none dark:bg-black-light',
      )}>
      {props.children}
    </article>
  );
};

export default Card;
