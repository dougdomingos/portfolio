import Container from '@components/layout/Container';
import Blog from '@components/pages/blog';
import pageMetadata from '@lib/pageMetadata';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Douglas Domingos | Blog',
  ...pageMetadata,
};

export default function BlogPage() {
  const posts = allPosts;

  return (
    <Container>
      <Blog posts={posts} />
    </Container>
  );
}
