import Link from 'next/link';

import { use } from 'react';

import Card from '@components/Card';
import { getPublicRepositories } from '@lib/getPublicRepositories';

const ProjectShowcase = () => {
  const repositories = use(getPublicRepositories());

  return (
    <section>
      <ul className='flex flex-wrap justify-center gap-4'>
        {repositories.map((repo) => (
          <li key={repo.name}>
            <Link href={repo.html_url} target='_blank'>
              <Card
                name={repo.name}
                description={repo.description}
                topics={repo.topics}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectShowcase;
