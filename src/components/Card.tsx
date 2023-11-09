type CardProps = {
  name: string;
  description: string;
  topics: string[];
};

const Card = ({ name, description, topics }: CardProps) => (
  <article className='transition overflow-hidden duration-300 flex flex-col shadow-md rounded-md hover:shadow-lg hover:-translate-y-1 w-[300px] bg-white-900'>
    <div className='flex flex-col gap-2 p-4'>
      <h2 className='text-lg font-display font-bold'>{name}</h2>
      <p>{description}</p>
      <ul className='flex gap-2 flex-wrap'>
        {topics.map((tag) => (
          <li
            key={tag}
            className='text-primary-dark rounded-full bg-primary-light py-1 px-3'>
            <span className='text-sm font-bold'>{tag}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export default Card;
