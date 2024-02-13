import Link from 'next/link';

import Card from '@components/Card';
import TopicTag from '@components/TopicTag';
import { Repository } from '@customTypes/Repository';

const RepoPreview = ({ name, description, topics, html_url }: Repository) => {
  return (
    <Link href={html_url} target='_blank'>
      <Card className='w-[300px]'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg font-display font-bold'>{name}</h2>
          <p className='h-full'>{description}</p>
          <ul className='flex gap-2 flex-wrap'>
            {topics.map((tag) => (
              <TopicTag key={tag} tag={tag} />
            ))}
          </ul>
        </div>
      </Card>
    </Link>
  );
};

export default RepoPreview;
