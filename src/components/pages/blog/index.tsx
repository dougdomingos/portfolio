'use client';

import { useState } from 'react';

import PostPreview from '@components/pages/blog/PostPreview';
import Searchbar from '@components/pages/blog/Searchbar';
import { filterPosts } from '@lib/filterPosts';
import { Post } from 'contentlayer/generated';

interface BlogProps {
  posts: Post[];
}

const Blog = ({ posts }: BlogProps) => {
  const [search, setSearch] = useState('');

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
  };

  return (
    <section className='flex flex-col items-center py-10 gap-6'>
      <Searchbar handleSearch={handleSearch} />
      <div className='flex flex-wrap justify-center w-full gap-6'>
        {filterPosts(posts, search).map((post) => (
          <PostPreview key={post.title} {...post}/>
        ))}
      </div>
    </section>
  );
};

export default Blog;
