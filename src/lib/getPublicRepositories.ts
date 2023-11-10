import { Repository } from '@customTypes/Repository';

export async function getPublicRepositories(): Promise<Repository[]> {
  const res = await fetch(process.env.GITHUB_REPOS, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },

    next: { revalidate: 6 * 60 * 60 },
  });

  const repositories: Repository[] = await res.json();

  // only returns repositories that have topics
  return repositories.filter((repo) => repo.topics.length != 0);
}
