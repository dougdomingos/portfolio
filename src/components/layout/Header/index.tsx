'use client';

import { usePathname } from 'next/navigation';

import { NavigationLink } from '@customTypes/Navigation';
import useMediaQuery from '@hooks/useIsDesktop';
import useToggle from '@hooks/useToggle';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Socials from './Socials';

const links: NavigationLink[] = [
  { url: '/', label: 'Home' },
  { url: '/projects', label: 'Projects' },
  { url: '/blog', label: 'Blog' },
];

const Header = () => {
  const [showNav, toggle] = useToggle();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const currentPage = usePathname();

  return (
    <header className='flex h-[70px] justify-center px-4'>
      <div className='flex h-full w-full max-w-[1200px] items-center justify-between font-display'>
        <span className='text-2xl font-bold first-letter:text-primary'>
          DOUG
        </span>
        {isMobile ? (
          <MobileNav
            visible={showNav}
            links={links}
            currentPage={currentPage}
            handleToggle={toggle}
          />
        ) : (
          <DesktopNav currentPage={currentPage} links={links} />
        )}
        {!isMobile && <Socials />}
      </div>
    </header>
  );
};

export default Header;