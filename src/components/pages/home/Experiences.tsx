import JobCard from './JobCard';
import jobs from './jobs';

const Experiences = () => (
  <section className='flex flex-col gap-6'>
    <h2 className='text-2xl font-display font-bold'>Experiences</h2>
    <ol className='py-2 ml-2 md:ml-8 flex flex-col gap-8 border-l border-gray-300 dark:border-gray-600'>
      {jobs.map((job) => (
        <li key={job.title}>
          <JobCard {...job} />
        </li>
      ))}
    </ol>
  </section>
);

export default Experiences;
