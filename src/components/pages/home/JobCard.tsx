import { Job } from '@customTypes/Job';
import clsx from 'clsx';

interface JobCardProps extends Job {}

const JobCard = ({
  time,
  title,
  company,
  description,
  current,
}: JobCardProps) => {
  return (
    <div className='relative ml-4 md:ml-6'>
      <div
        className={clsx(
          current ? 'bg-primary' : 'bg-black scale-90',
          'absolute top-1.5 -left-6 md:-left-8 ring-white ring-1 rounded-full w-4 h-4',
          'dark:ring-black-light',
        )}
      />
      <span className='italic'>{time}</span>
      <h3 className='font-bold text-xl font-display'>
        {title} &bull; {company}
      </h3>
      <p className='text-lg'>{description}</p>
    </div>
  );
};

export default JobCard;
