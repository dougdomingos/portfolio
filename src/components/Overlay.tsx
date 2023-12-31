import { PropsWithChildren } from 'react';

import { X } from '@phosphor-icons/react';
import clsx from 'clsx';

import ToggleButton from './ToggleButton';

interface OverlayProps extends PropsWithChildren {
  visible: boolean;
  handleClose: () => void;
}

const Overlay = ({ visible, handleClose, children }: OverlayProps) => {
  return (
    <aside
      className={clsx(
        visible ? 'w-full' : 'w-0',
        'fixed z-10 right-0 top-0 flex h-full flex-col justify-center overflow-hidden',
        'bg-white-light dark:bg-black-light',
        'transition-all duration-500 ease-in-out touch-none',
      )}>
      <ToggleButton
        icon={<X size={24} />}
        label='Toggle OFF Navigation'
        handleClick={handleClose}
        className='absolute left-4 top-4'
      />
      {children}
    </aside>
  );
};

export default Overlay;
