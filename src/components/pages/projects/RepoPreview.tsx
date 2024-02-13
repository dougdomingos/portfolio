import Link from 'next/link';

import Card from '@components/Card';
import TopicTag from '@components/TopicTag';
import { Repository } from '@customTypes/Repository';

const RepoPreview = ({ name, description, topics, html_url }: Repository) => {
  return (
    <Link href={html_url} target='_blank'>
      <Card className='max-w-sm md:max-w-xs'>
        <h2 className='text-lg font-display font-bold mb-[0.2em]'>{name}</h2>
        <p className='mb-[0.6em]'>{description}</p>
        <ul className='flex gap-2 flex-wrap'>
          {topics.map((tag) => (
            <TopicTag key={tag} tag={tag} />
          ))}
        </ul>
      </Card>
    </Link>
  );
};

export default RepoPreview;
