import { useRouter } from 'next/navigation';

import Card from '@components/Card';
import { formatDate } from '@lib/formatDate';
import { Post } from 'contentlayer/generated';

import TopicTag from '../../TopicTag';

const PostPreview = (post: Post) => {
  const router = useRouter();

  const handlePostClick = () => {
    router.push(post.url);
  };

  return (
    <Card
      onClick={handlePostClick}
      className='max-w-sm gap-2 cursor-pointer'>
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
    </Card>
  );
};

export default PostPreview;
