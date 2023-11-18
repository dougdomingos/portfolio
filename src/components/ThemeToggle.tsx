'use client';

import { ComponentPropsWithoutRef } from 'react';

import { Moon, Sun } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';

import ToggleButton from './ToggleButton';

const ThemeToggle = ({ className }: ComponentPropsWithoutRef<'button'>) => {
  const { theme, setTheme } = useTheme();

  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ToggleButton
      icon={<ThemeToggleIcons />}
      label='Switch UI theme'
      handleClick={handleThemeSwitch}
      className={className}
    />
  );
};

const ThemeToggleIcons = () => (
  <>
    <Moon size={24} weight='fill' className='hidden dark:block' />
    <Sun size={24} weight='light' className='block dark:hidden' />
  </>
);

export default ThemeToggle;
