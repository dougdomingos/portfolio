import { usePathname } from 'next/navigation';

import ThemeToggle from '@components/ThemeToggle';
import { NavigationLink } from '@customTypes/Navigation';
import useMediaQuery from '@hooks/useIsDesktop';
import useToggle from '@hooks/useToggle';

import Container from '../Container';
import Actions from './Actions';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const links: NavigationLink[] = [
  { url: '/home', label: 'Home' },
  { url: '/projects', label: 'Projects' },
  { url: '/blog', label: 'Blog' },
];

const Header = () => {
  const [showNav, toggle] = useToggle();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const currentPage = usePathname()!;

  return (
    <header className='flex h-[70px] justify-center px-4'>
      <Container className='flex h-full items-center justify-between font-display'>
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
      </Container>
    </header>
  );
};

export default Header;
