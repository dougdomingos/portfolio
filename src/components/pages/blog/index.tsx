import Searchbar from '@components/Searchbar';
import PostList from './PostList';

const Blog = () => (
  <section className='flex flex-col items-center py-10 gap-6 min-h-[72.5vh]'>
    <Searchbar />
    <PostList />
  </section>
);

export default Blog;
