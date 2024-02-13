import { Job } from '@customTypes/Job';
import { formatDate } from '@lib/formatDate';
import clsx from 'clsx';

interface JobCardProps extends Job {}

const JobCard = ({ time, title, company, description }: JobCardProps) => {
  const timeSpan = `${formatDate(time.start, 'long')} - ${
    time.end ? formatDate(time.end, 'long') : 'Current'
  }`;

  return (
    <div className='relative ml-4 md:ml-6'>
      <div
        className={clsx(
          time.end ? 'bg-primary-dark' : 'bg-primary scale-125',
          'absolute top-1 -left-6 md:-left-8 rounded-full w-4 h-4',
        )}
      />
      <span className='inline-block text-sm italic opacity-80 mb-1'>
        {timeSpan}
      </span>
      <h3 className='font-bold text-xl font-display mb-2'>
        {title} &bull; {company}
      </h3>
      <p className='text-lg'>{description}</p>
    </div>
  );
};

export default JobCard;
