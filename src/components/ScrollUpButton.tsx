'use client';

import useScroll from '@hooks/useScroll';
import { CaretDoubleUp } from '@phosphor-icons/react';
import clsx from 'clsx';

const ScrollUpButton = () => {
  const scrollY = useScroll();

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={clsx(
        scrollY > 0 ? 'scale-1' : 'scale-0',
        'fixed bottom-16 right-4 md:right-8 xl:right-16 p-3 rounded-full w-12 group z-10',
        'bg-white-light dark:bg-black-light transition-transform duration-300',
      )}
      onClick={handleScrollUp}
      aria-label='Scroll to top'>
      <CaretDoubleUp className='w-full h-auto md:group-hover:-translate-y-1 md:transition-transform' />
    </button>
  );
};

export default ScrollUpButton;
