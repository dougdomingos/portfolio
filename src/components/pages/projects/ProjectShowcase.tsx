import Link from 'next/link';

import { Card, CardProps } from '@components/Card';

const projectList: CardProps[] = [
  {
    name: 'Test 1',
    description: 'Sample description',
    bannerSrc: '/banners/default-banner.jpg',
    cardURL: 'https://github.com/dougdomingos/dougdomingos',
    tags: ['Python', 'Java', 'C++'],
  },
];

const ProjectShowcase = () => (
  <section>
    <ul className='flex flex-wrap justify-center'>
      {projectList.map((project) => (
        <li key={project.name}>
          <Link href={project.cardURL}>
            <Card {...project} />
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default ProjectShowcase;
