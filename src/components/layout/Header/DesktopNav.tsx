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
              currentPage.startsWith(link.url) &&
                'font-bold text-primary-dark bg-primary-light',
              'rounded-md transition-colors duration-300 hover:bg-primary-light',
            )}>
            <Link href={link.url} className='px-3 py-1.5 uppercase inline-block'>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
