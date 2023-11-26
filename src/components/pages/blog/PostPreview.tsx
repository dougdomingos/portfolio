import clsx from 'clsx';
import { Post } from 'contentlayer/generated';

import TopicTag from '../../TopicTag';
import { formatDate } from '@lib/formatDate';

const PostPreview = (post: Post) => (
  <article
    className={clsx(
      'flex flex-col max-w-sm gap-2 bg-white-light p-4',
      'dark:bg-black-light',
    )}>
    <span className='text-sm text-black dark:text-white-dark italic'>
      {formatDate(new Date(post.postDate), 'short')}
    </span>
    <h2 className='text-lg font-bold font-display'>{post.title}</h2>
    <p>{post.description}</p>
    <ul className='flex gap-2'>
      {post.topics.map((topic) => (
        <TopicTag key={topic} tag={`#${topic}`} />
      ))}
    </ul>
  </article>
);

export default PostPreview;
