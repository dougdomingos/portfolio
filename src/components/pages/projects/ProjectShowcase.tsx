import Link from 'next/link';

import { use } from 'react';

import Card from '@components/Card';
import { Repository } from '@customTypes/Repository';

async function fetchRepositories(): Promise<Repository[]> {
  const res = await fetch(process.env.GITHUB_REPOS, {
    next: { revalidate: 24 * 60 * 60 },
  });

  const repositories: Repository[] = await res.json();

  // only returns repositories that have topics
  return repositories.filter((repo) => repo.topics.length != 0);
}

const ProjectShowcase = () => {
  const repositories = use(fetchRepositories());

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
