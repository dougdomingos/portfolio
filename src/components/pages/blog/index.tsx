'use client';

import Link from 'next/link';

import { useState } from 'react';

import PostPreview from '@components/pages/blog/PostPreview';
import Searchbar from '@components/pages/blog/Searchbar';
import { filterPosts } from '@lib/filterPosts';
import clsx from 'clsx';
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
          <Link
            key={post.title}
            href={post.url}
            className={clsx(
              'shadow-md rounded-md overflow-hidden',
              'dark:shadow-none hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-primary',
              'transition-[transform,box-shadow] duration-300',
            )}>
            <PostPreview {...post} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
