'use client';

import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  useEffect,
} from 'react';

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
      icon={theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
      label='Switch UI theme'
      handleClick={handleThemeSwitch}
      className={className}
    />
  );
};

export default ThemeToggle;
