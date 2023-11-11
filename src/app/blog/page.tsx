import Container from "@components/layout/Container";
import Blog from "@components/pages/blog";
import { getPostsMetadata } from "@lib/getPostsMetadata";

export default function BlogPage() {
  const posts = getPostsMetadata();

  return (
    <Container>
      <Blog posts={posts} />
    </Container>
  )
}