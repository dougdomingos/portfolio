import { Job } from '@customTypes/Job';

import JobCard from './JobCard';

const jobs: Job[] = [
  {
    title: 'Institutional Monitor',
    company: 'UFCG',
    description:
      'I helped students solidify the core concepts of Object-Oriented Programming with Java, Design Patters and Modeling (UML), through review sessions and online support. I also helped teachers in elaborating and assessing student assignments.',
    time: 'Jul 2023 - Current',
    current: true,
  },
];

const Experiences = () => (
  <section className='flex flex-col gap-6'>
    <h2 className='text-2xl font-display font-bold'>Experiences</h2>
    <ol className='ml-2 md:ml-8 flex flex-col gap-8 border-l border-gray-300 dark:border-gray-600'>
      {jobs.map((job) => (
        <li key={job.title}>
          <JobCard
            time={job.time}
            title={job.title}
            company={job.company}
            description={job.description}
            current={job.current}
          />
        </li>
      ))}
    </ol>
  </section>
);

export default Experiences;
