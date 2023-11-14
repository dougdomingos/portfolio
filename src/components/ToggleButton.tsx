import { ComponentPropsWithoutRef } from 'react';

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
    className={`${className} rounded-md p-1.5 active:bg-slate-300`}>
    {icon}
  </button>
);

export default ToggleButton;
