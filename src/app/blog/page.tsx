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
  const posts = allPosts.sort((p1, p2) =>
    p1.postDate <= p2.postDate ? 1 : -1,
  );

  return (
    <Container>
      <Blog posts={posts} />
    </Container>
  );
}
