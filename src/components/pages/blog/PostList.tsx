import Link from 'next/link';

import TopicTag from '@components/TopicTag';
import { PostMetadata } from '@customTypes/Post';
import { formatDate } from '@lib/formatDate';
import clsx from 'clsx';

interface PostListProps {
  searchTerm: string;
  posts: PostMetadata[];
}

const PostList = ({ searchTerm, posts }: PostListProps) => {
  return (
    <div className='flex flex-wrap justify-center w-full gap-6'>
      {posts
        .filter((post) => {
          return post.title.toLowerCase() === ''
            ? post
            : post.title.toLocaleLowerCase().includes(searchTerm.toLowerCase());
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={clsx(
              'shadow-md rounded-md overflow-hidden',
              'hover:-translate-y-1 hover:shadow-lg duration-300 transition',
              'dark:shadow-none dark:hover:ring-2 dark:hover:ring-primary',
            )}>
            <article
              className={clsx(
                'flex flex-col max-w-sm gap-2 bg-white-light p-4',
                'dark:bg-black-light',
              )}>
              <span className='text-sm text-black dark:text-white-dark italic'>
                {formatDate(post.postDate, 'short')}
              </span>
              <h2 className='text-lg font-bold font-display'>{post.title}</h2>
              <p>{post.description}</p>
              <ul className='flex gap-2'>
                {post.topics.map((topic) => (
                  <TopicTag key={topic} tag={`#${topic}`} />
                ))}
              </ul>
            </article>
          </Link>
        ))}
    </div>
  );
};

export default PostList;
