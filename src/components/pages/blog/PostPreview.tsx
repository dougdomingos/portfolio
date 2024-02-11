import { useRouter } from 'next/navigation';

import { formatDate } from '@lib/formatDate';
import clsx from 'clsx';
import { Post } from 'contentlayer/generated';

import TopicTag from '../../TopicTag';

const PostPreview = (post: Post) => {
  const router = useRouter();

  const handlePostClick = () => {
    router.push(post.url);
  };

  return (
    <article
      onClick={handlePostClick}
      className={clsx(
        'flex flex-col max-w-sm gap-2 bg-white-light p-4 shadow-md rounded-md overflow-hidden',
        'hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-primary',
        'transition-[transform,box-shadow] duration-300',
        'dark:bg-black-light dark:shadow-none',
      )}>
      <span className='text-sm text-black dark:text-white-dark italic'>
        {formatDate(new Date(post.postDate), 'short')}
      </span>
      <h2 className='text-lg font-bold font-display'>{post.title}</h2>
      <p className='h-full'>{post.description}</p>
      <ul className='flex gap-2'>
        {post.topics.map((topic) => (
          <TopicTag key={topic} tag={`#${topic}`} />
        ))}
      </ul>
    </article>
  );
};

export default PostPreview;
