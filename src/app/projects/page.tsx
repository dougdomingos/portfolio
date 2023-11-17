import Container from '@components/layout/Container';
import Projects from '@components/pages/projects';
import pageMetadata from '@lib/pageMetadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Douglas Domingos | Projects',
  ...pageMetadata,
};

export default function ProjectPage() {
  return (
    <Container>
      <Projects />
    </Container>
  );
}
