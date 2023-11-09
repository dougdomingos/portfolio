import FigmaOriginalIcon from 'react-devicons/figma/original';
import GitOriginalIcon from 'react-devicons/git/original';
import JavaOriginalIcon from 'react-devicons/java/original';
import LinuxOriginalIcon from 'react-devicons/linux/original';
import NextjsOriginalIcon from 'react-devicons/nextjs/original';
import NodejsOriginalIcon from 'react-devicons/nodejs/original';
import PythonOriginalIcon from 'react-devicons/python/original';
import ReactOriginalIcon from 'react-devicons/react/original';
import SassOriginalIcon from 'react-devicons/sass/original';
import TailwindcssOriginalWordmarkIcon from 'react-devicons/tailwindcss/original-wordmark';
import TypescriptOriginalIcon from 'react-devicons/typescript/original';

import { Skill } from '@customTypes/Skills';

const skillList: Skill[] = [
  { title: 'Typescript', icon: TypescriptOriginalIcon },
  { title: 'Python', icon: PythonOriginalIcon },
  { title: 'Java', icon: JavaOriginalIcon },
  { title: 'Sass', icon: SassOriginalIcon },
  { title: 'React', icon: ReactOriginalIcon },
  { title: 'Tailwind CSS', icon: TailwindcssOriginalWordmarkIcon },
  { title: 'Node.js', icon: NodejsOriginalIcon },
  { title: 'NEXT.js', icon: NextjsOriginalIcon },
  { title: 'Git', icon: GitOriginalIcon },
  { title: 'Figma', icon: FigmaOriginalIcon },
  { title: 'Linux', icon: LinuxOriginalIcon },
];

const SkillIcon = (props: {
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <div className='w-24 h-auto transition duration-300 lg:grayscale hover:grayscale-0'>
    <props.icon className='!w-full !h-auto' />
  </div>
);

const Skills = () => (
  <section className='flex flex-col items-center'>
    <h2 className='text-2xl font-display font-bold mb-4 self-start'>
      My skills
    </h2>
    <ul className='flex flex-wrap justify-center gap-12'>
      {skillList.map((skill) => (
        <li key={skill.title} className='flex flex-col gap-2 items-center'>
          <SkillIcon icon={skill.icon} />
          <span className='text-sm font-display'>{skill.title}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
