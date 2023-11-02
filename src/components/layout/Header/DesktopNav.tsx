import Link from 'next/link';

import { Navigation } from '@customTypes/Navigation';

const DesktopNav = ({ links, currentPage }: Navigation) => {
  return (
    <nav>
      <ul className='flex gap-4'>
        {links.map((link) => (
          <li
            key={link.label}
            className={currentPage === link.url ? 'link-desktop-active' : ''}>
            <Link href={link.url} className='uppercase'>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
