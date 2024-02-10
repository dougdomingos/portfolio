import { Job } from '@customTypes/Job';
import { formatDate } from '@lib/formatDate';
import clsx from 'clsx';

interface JobCardProps extends Job { }

const JobCard = ({
  time,
  title,
  company,
  description,
}: JobCardProps) => {
  const timeSpan = 
    `${formatDate(time.start, 'long')} - ${time.end ? formatDate(time.end, 'long') : 'Current'}`;

  return (
    <div className='relative ml-4 md:ml-6'>
      <div
        className={clsx(
          time.end ? 'bg-black' : 'bg-primary scale-125',
          'absolute top-1.5 -left-6 md:-left-8 ring-white ring-1 rounded-full w-4 h-4',
          'dark:ring-black-light',
        )}
      />
      <span className='italic'>{timeSpan}</span>
      <h3 className='font-bold text-xl font-display'>
        {title} &bull; {company}
      </h3>
      <p className='text-lg'>{description}</p>
    </div>
  );
};

export default JobCard;
