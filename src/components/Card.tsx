import clsx from 'clsx';

import TopicTag from './TopicTag';

type CardProps = {
  name: string;
  description: string;
  topics: string[];
};

const Card = ({ name, description, topics }: CardProps) => (
  <article
    className={clsx(
      'overflow-hidden flex flex-col shadow-md rounded-md w-[300px] bg-white-light',
      'hover:shadow-lg hover:-translate-y-1 transition duration-300 hover:ring-2 hover:ring-primary',
      'dark:shadow-none dark:bg-black-light',
    )}>
    <div className='flex flex-col gap-2 p-4'>
      <h2 className='text-lg font-display font-bold'>{name}</h2>
      <p>{description}</p>
      <ul className='flex gap-2 flex-wrap'>
        {topics.map((tag) => (
          <TopicTag key={tag} tag={tag} />
        ))}
      </ul>
    </div>
  </article>
);

export default Card;
