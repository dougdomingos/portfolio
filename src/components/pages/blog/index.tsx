'use client';

import { useState } from 'react';

import Searchbar from '@components/Searchbar';
import { PostMetadata } from '@customTypes/Post';

import PostList from './PostList';

interface BlogProps {
  posts: PostMetadata[];
}

const Blog = ({ posts }: BlogProps) => {
  const [search, setSearch] = useState('');

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
  };

  return (
    <section className='flex flex-col items-center py-10 gap-6 min-h-[72.5vh]'>
      <Searchbar handleSearch={handleSearch} />
      <PostList searchTerm={search} posts={posts} />
    </section>
  );
};

export default Blog;
