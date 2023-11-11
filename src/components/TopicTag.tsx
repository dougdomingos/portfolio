interface TopicTagProps {
  tag: string;
}

const TopicTag = ({ tag }: TopicTagProps) => (
  <li className='text-primary-dark rounded-full bg-primary-light py-1 px-3'>
    <span className='text-sm font-bold'>{tag.replace(' ', '-')}</span>
  </li>
);

export default TopicTag;
