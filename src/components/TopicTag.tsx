import clsx from 'clsx';

interface TopicTagProps {
  tag: string;
}

const TopicTag = ({ tag }: TopicTagProps) => (
  <li
    className={clsx(
      'text-primary-dark rounded-full bg-primary-light py-1 px-3',
      'dark:text-primary-light dark:bg-primary-dark',
    )}>
    <span className='text-sm font-bold'>{tag.replace(' ', '-')}</span>
  </li>
);

export default TopicTag;
