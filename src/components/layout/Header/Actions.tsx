import Link from 'next/link';

import { ComponentPropsWithoutRef } from 'react';

import ThemeToggle from '@components/ThemeToggle';
import { GithubLogo, Icon, LinkedinLogo } from '@phosphor-icons/react';
import clsx from 'clsx';

type Social = {
  SocialIcon: Icon;
  link: string;
  ariaLabel: string;
};

const socials: Social[] = [
  {
    SocialIcon: GithubLogo,
    link: 'https://github.com/dougdomingos',
    ariaLabel: 'Go to GitHub profile',
  },
  {
    SocialIcon: LinkedinLogo,
    link: 'https://linkedin.com/in/douglas-domingos',
    ariaLabel: 'Go to Linkedin profile',
  },
];

const Actions = ({ className }: ComponentPropsWithoutRef<'div'>) => (
  <div className={clsx(className, 'flex items-center')}>
    <ul className='inline-flex gap-4'>
      {socials.map(({ link, ariaLabel, SocialIcon }) => (
        <li
          key={link}
          className='transition-all hover:scale-125 ease-out'>
          <Link href={link} aria-label={ariaLabel}>
            {<SocialIcon size={32} weight='fill' />}
          </Link>
        </li>
      ))}
      <li>
        <ThemeToggle />
      </li>
    </ul>
  </div>
);

export default Actions;
