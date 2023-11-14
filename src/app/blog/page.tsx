import Container from '@components/layout/Container';
import Blog from '@components/pages/blog';
import { getPostsMetadata } from '@lib/getPostsMetadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Douglas Domingos | Blog',
};

export default function BlogPage() {
  const posts = getPostsMetadata();

  return (
    <Container>
      <Blog posts={posts} />
    </Container>
  );
}
