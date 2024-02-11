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
            <Card {...repo} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectShowcase;
