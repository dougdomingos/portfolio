import { Post } from '@customTypes/Post';

const posts: Post[] = [
  {
    title: 'Post 1',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam cupiditate assumenda quasi, tempora id doloribus sequi libero veritatis. Aspernatur, et libero? Iure ipsum repellat rerum reprehenderit doloribus rem eaque!',
    postDate: new Date('2023-07-01'),
    topics: ['computer science', 'career'],
  },
  {
    title: 'Post 2',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam cupiditate assumenda quasi, tempora id doloribus sequi libero veritatis. Aspernatur, et libero? Iure ipsum repellat rerum reprehenderit doloribus rem eaque!',
    postDate: new Date('2023-07-01'),
    topics: ['computer science', 'career'],
  },
  {
    title: 'Post 3',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam cupiditate assumenda quasi, tempora id doloribus sequi libero veritatis. Aspernatur, et libero? Iure ipsum repellat rerum reprehenderit doloribus rem eaque!',
    postDate: new Date('2023-07-01'),
    topics: ['computer science', 'career'],
  },
];

const PostList = () => (
  <div className='flex flex-wrap justify-center w-full gap-6'>
    {posts.map((post) => (
      <article
        key={post.title}
        className='flex flex-col max-w-sm gap-2 bg-white-900 p-4 shadow-md rounded-md'>
        <span className='text-sm text-black italic'>
          {post.postDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
          })}
        </span>
        <h2 className='text-lg font-bold font-display'>{post.title}</h2>
        <p>{post.description}</p>
        <ul className='flex gap-2'>
          {post.topics.map((topic) => (
            <li key={topic}>&#x23;{topic}</li>
          ))}
        </ul>
      </article>
    ))}
  </div>
);

export default PostList;
