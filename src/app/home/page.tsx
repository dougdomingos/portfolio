import Container from '@components/layout/Container';
import Home from '@components/pages/home';
import pageMetadata from '@lib/pageMetadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Douglas Domingos | Portfolio',
  ...pageMetadata,
};

export default function HomePage() {
  return (
    <Container>
      <Home />
    </Container>
  );
}
