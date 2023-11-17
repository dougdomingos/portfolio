import { PostMetadata } from '@customTypes/Post';

export function filterPosts(
  postList: PostMetadata[],
  search: string,
): PostMetadata[] {
  if (search === '') {
    return postList;
  }

  const filteredPosts: PostMetadata[] = [];

  if (search.startsWith('#')) {
    postList.forEach((post) => {
      const topics = post.topics.join();

      if (topics.includes(search.replace('#', ''))) {
        filteredPosts.push(post);
      }
    });
  } else {
    postList.forEach((post) => {
      if (post.title.toLowerCase().includes(search.toLowerCase())) {
        filteredPosts.push(post);
      }
    });
  }

  return filteredPosts;
}
