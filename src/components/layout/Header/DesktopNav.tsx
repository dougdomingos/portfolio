import Link from 'next/link';

import { Navigation } from '@customTypes/Navigation';
import clsx from 'clsx';

import Actions from './Actions';

const DesktopNav = ({ links, currentPage }: Navigation) => {
  return (
    <>
      <nav>
        <ul className='flex gap-2 group'>
          {links.map((link) => (
            <li
              key={link.label}
              className={clsx(
                currentPage.startsWith(link.url) &&
                  'font-bold text-primary-dark bg-primary-light dark:text-primary-light dark:bg-primary-dark',
                'rounded-md transition-[color,opacity,background] duration-300',
                'hover:bg-primary-light dark:hover:bg-primary-dark',
                'group-hover:opacity-60 hover:!opacity-100',
              )}>
              <Link
                href={link.url}
                className='px-3 py-1.5 uppercase inline-block'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Actions />
    </>
  );
};

export default DesktopNav;
