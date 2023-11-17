import Link from 'next/link';

import Post from '@components/Post';
import { PostMetadata } from '@customTypes/Post';
import { filterPosts } from '@lib/filterPosts';
import clsx from 'clsx';

interface PostListProps {
  searchTerm: string;
  posts: PostMetadata[];
}

const PostList = ({ searchTerm, posts }: PostListProps) => {
  return (
    <div className='flex flex-wrap justify-center w-full gap-6'>
      {filterPosts(posts, searchTerm).map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className={clsx(
            'shadow-md rounded-md overflow-hidden',
            'dark:shadow-none hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-primary',
            'transition duration-300',
          )}>
          <Post {...post} />
        </Link>
      ))}
    </div>
  );
};

export default PostList;
