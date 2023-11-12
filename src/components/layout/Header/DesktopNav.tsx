import Link from 'next/link';

import { Navigation } from '@customTypes/Navigation';
import clsx from 'clsx';

const DesktopNav = ({ links, currentPage }: Navigation) => {
  return (
    <nav>
      <ul className='flex gap-2'>
        {links.map((link) => (
          <li
            key={link.label}
            className={clsx(
              currentPage === link.url &&
                'font-bold text-primary-dark bg-primary-light',
              'px-2 py-1 rounded-md',
            )}>
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
