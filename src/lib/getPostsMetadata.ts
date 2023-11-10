import { PostMetadata } from '@customTypes/Post';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export function getPostsMetadata(): PostMetadata[] {
  const postsDir = 'src/posts';

  const posts = fs
    .readdirSync(path.join(postsDir))
    .map<PostMetadata>((post) => {
      const postContent = fs.readFileSync(path.join(postsDir, post), 'utf-8');
      const { data: frontMatter } = matter(postContent);

      return {
        title: frontMatter.title,
        description: frontMatter.description,
        postDate: new Date(frontMatter.postDate),
        topics: frontMatter.topics,
        slug: post.replace('.mdx', ''),
      };
    });

  return posts;
}
