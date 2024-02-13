import { Skill } from '@customTypes/Skill';
import {
  GoogleChromeLogo,
  TerminalWindow,
  PaintBrushBroad,
  TestTube,
} from '@phosphor-icons/react/dist/ssr';

const skillSet: Skill[] = [
  {
    SkillIcon: GoogleChromeLogo,
    title: 'Web Development',
    description:
      "I've developed Web applications and REST APIs, using technologies as React, Express.js and Flask",
  },
  {
    SkillIcon: TerminalWindow,
    title: 'Automation and CI',
    description:
      'Using Python and Bash, I create scripts to automate system recurring tasks and building utility tools',
  },
  {
    SkillIcon: TestTube,
    title: 'Unit Testing',
    description:
      'I have a vast experience in Unit Testing with a range of frameworks, such as Pytest, JUnit and Jest',
  },
  {
    SkillIcon: PaintBrushBroad,
    title: 'UI Design',
    description:
      "Although I'm not a superb designer, I'm able to design interactive and clean UI prototypes using Figma",
  },
];

export default skillSet;
