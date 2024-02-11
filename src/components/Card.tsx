'use client';

import Link from 'next/link';

import { Repository } from '@customTypes/Repository';
import clsx from 'clsx';

import TopicTag from './TopicTag';

const Card = ({ name, description, topics, html_url }: Repository) => {
  return (
    <Link href={html_url} target='_blank'>
      <article
        className={clsx(
          'overflow-hidden flex flex-col shadow-md rounded-md w-[300px] bg-white-light',
          'hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-300 hover:ring-2 hover:ring-primary',
          'dark:shadow-none dark:bg-black-light',
        )}>
        <div className='flex flex-col gap-2 p-4'>
          <h2 className='text-lg font-display font-bold'>{name}</h2>
          <p className='h-full'>{description}</p>
          <ul className='flex gap-2 flex-wrap'>
            {topics.map((tag) => (
              <TopicTag key={tag} tag={tag} />
            ))}
          </ul>
        </div>
      </article>
    </Link>
  );
};

export default Card;
