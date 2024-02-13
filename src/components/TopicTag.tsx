import clsx from 'clsx';

interface TopicTagProps {
  tag: string;
}

const TopicTag = ({ tag }: TopicTagProps) => (
  <li
    className={clsx(
      'text-primary-dark rounded-full bg-primary-light text-xs py-[0.5em] px-[1em]',
      'dark:text-primary-light dark:bg-primary-dark',
    )}>
    <span className='text-sm font-bold'>#{tag.replace(' ', '-')}</span>
  </li>
);

export default TopicTag;
