import Link from 'next/link';

import { ComponentPropsWithoutRef } from 'react';

import ThemeToggle from '@components/ThemeToggle';
import { Social } from '@customTypes/Socials';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import clsx from 'clsx';

const socials: Social[] = [
  {
    icon: <GithubLogo size={32} weight='fill' />,
    link: 'https://github.com/dougdomingos',
    ariaLabel: 'Go to GitHub profile',
  },
  {
    icon: (
      <LinkedinLogo
        size={32}
        weight='fill'
        className='transition-colors hover:text-primary hover:opacity-100 ease-out'
      />
    ),
    link: 'https://linkedin.com/in/douglas-domingos',
    ariaLabel: 'Go to Linkedin profile',
  },
];

const Actions = ({ className }: ComponentPropsWithoutRef<'div'>) => (
  <div className={clsx(className, 'flex items-center')}>
    <ul className='inline-flex gap-4'>
      {socials.map((social) => (
        <li
          key={social.link}
          className='transition-all hover:scale-125 ease-out'>
          <Link href={social.link} aria-label={social.ariaLabel}>
            {social.icon}
          </Link>
        </li>
      ))}
      <ThemeToggle />
    </ul>
  </div>
);

export default Actions;
