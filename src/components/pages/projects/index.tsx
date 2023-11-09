import ProjectShowcase from './ProjectShowcase';
import Skills from './Skills';

const Projects = () => (
  <div className={'flex flex-col gap-8 py-10'}>
    <ProjectShowcase />
    <Skills />
  </div>
);

export default Projects;
