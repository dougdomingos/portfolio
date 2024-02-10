import { Job } from '@customTypes/Job';

const jobs: Job[] = [
  {
    title: 'DevOps',
    company: 'Guardians UFCG',
    description:
      "As a member of the Guardians, I'm responsible for developing and maintaining effective solutions for the department's laboratories, ensuring everything works as expected.",
    time: {
      start: new Date('12-01-2023'),
    },
  },
  {
    title: 'Institutional Monitor',
    company: 'Federal University of Campina Grande (UFCG)',
    description:
      'I helped students solidify the core concepts of Object-Oriented Programming with Java, Design Patters and Modeling (UML), through review sessions and online support. I also helped teachers in elaborating and assessing student assignments.',
    time: {
      start: new Date('07-01-2023'),
      end: new Date('11-01-2023'),
    },
  },
];

export default jobs;
