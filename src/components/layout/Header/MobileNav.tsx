import Link from 'next/link';

import { Navigation } from '@customTypes/Navigation';
import { List } from '@phosphor-icons/react';
import clsx from 'clsx';

import Overlay from '../../Overlay';
import ToggleButton from '../../ToggleButton';

interface MobileNavProps extends Navigation {
  visible: boolean;
  handleToggle: () => void;
}

const MobileNav = ({
  links,
  currentPage,
  visible,
  handleToggle,
}: MobileNavProps) => {
  return (
    <>
      <ToggleButton
        icon={<List size={24} />}
        label='Toggle ON Navigation'
        handleClick={handleToggle}
      />
      <Overlay visible={visible} handleClose={handleToggle}>
        <nav>
          <ul className='flex flex-col'>
            {links.map((link) => (
              <li
                key={link.label}
                className={clsx(
                  currentPage.startsWith(link.url) &&
                    'border-l-[5px] border-primary bg-primary-light font-bold',
                  'px-4 py-6 text-right text-2xl',
                )}>
                <Link onClick={handleToggle} href={link.url}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Overlay>
    </>
  );
};

export default MobileNav;
