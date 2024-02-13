import ProjectShowcase from './ProjectShowcase';
import SkillShowcase from './SkillShowcase';

const Projects = () => (
  <div className={'flex flex-col gap-8 py-10'}>
    <ProjectShowcase />
    <SkillShowcase />
  </div>
);

export default Projects;
