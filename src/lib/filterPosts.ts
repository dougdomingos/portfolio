import { Post } from 'contentlayer/generated';

export function filterPosts(postList: Post[], search: string): Post[] {
  if (search === '') {
    return postList;
  }

  const filteredPosts: Post[] = [];

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
