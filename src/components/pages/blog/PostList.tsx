import Link from 'next/link';

import TopicTag from '@components/TopicTag';
import { PostMetadata } from '@customTypes/Post';
import { formatDate } from '@lib/formatDate';

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
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className='flex flex-col max-w-sm gap-2 bg-white-900 p-4 shadow-md rounded-md'>
              <span className='text-sm text-black italic'>
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
