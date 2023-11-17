import { PostMetadata } from '@customTypes/Post';
import { formatDate } from '@lib/formatDate';
import clsx from 'clsx';

import TopicTag from './TopicTag';

const Post = ({ title, description, postDate, topics }: PostMetadata) => (
  <article
    className={clsx(
      'flex flex-col max-w-sm gap-2 bg-white-light p-4',
      'dark:bg-black-light',
    )}>
    <span className='text-sm text-black dark:text-white-dark italic'>
      {formatDate(postDate, 'short')}
    </span>
    <h2 className='text-lg font-bold font-display'>{title}</h2>
    <p>{description}</p>
    <ul className='flex gap-2'>
      {topics.map((topic) => (
        <TopicTag key={topic} tag={`#${topic}`} />
      ))}
    </ul>
  </article>
);

export default Post;
