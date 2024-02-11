import { use } from 'react';

import { getPublicRepositories } from '@lib/getPublicRepositories';
import RepoPreview from './RepoPreview';

const ProjectShowcase = () => {
  const repositories = use(getPublicRepositories());

  return (
    <section>
      <ul className='flex flex-wrap justify-center gap-4'>
        {repositories.map((repo) => (
          <li key={repo.name}>
            <RepoPreview {...repo} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectShowcase;
