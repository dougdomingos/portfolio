import { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';

interface ToggleButtonProps extends ComponentPropsWithoutRef<'button'> {
  icon: React.ReactElement;
  label: string;
  handleClick: () => void;
}

const ToggleButton = ({
  icon,
  label,
  handleClick,
  className,
}: ToggleButtonProps) => (
  <button
    aria-label={label}
    onClick={handleClick}
    className={clsx(
      className,
      'rounded-md p-1.5 active:bg-slate-300 dark:active:bg-black-dark',
    )}>
    {icon}
  </button>
);

export default ToggleButton;
