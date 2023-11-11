import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';

interface SearchbarProps {
  handleSearch: (value: string) => void;
}

const Searchbar = ({ handleSearch }: SearchbarProps ) => (
  <div className='relative overflow-hidden rounded-md bg-white-900 transition hover:ring-primary hover:ring-2 flex w-full max-w-lg items-center shadow-md'>
    <MagnifyingGlass size={20} className='ml-4' />
    <input
      type='search'
      placeholder='Search for title or #topic...'
      className='py-3 px-4 outline-none w-full'
      onChange={(event) => handleSearch(event.target.value)}
    />
  </div>
);

export default Searchbar;
