import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import clsx from 'clsx';

interface SearchbarProps {
  handleSearch: (value: string) => void;
}

const Searchbar = ({ handleSearch }: SearchbarProps) => (
  <div
    className={clsx(
      'overflow-hidden rounded-md bg-white-light flex w-full max-w-lg items-center shadow-md',
      'hover:ring-primary hover:ring-2 transition',
      'dark:bg-black-light dark:shadow-none'
    )}>
    <MagnifyingGlass size={20} className='ml-4' />
    <input
      type='search'
      placeholder='Search for title or #topic...'
      className='py-3 px-4 outline-none bg-transparent w-full'
      onChange={(event) => handleSearch(event.target.value)}
    />
  </div>
);

export default Searchbar;
