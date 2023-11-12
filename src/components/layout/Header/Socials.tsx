import Link from 'next/link';

import { Social } from '@customTypes/Socials';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

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

const Socials = () => (
  <div>
    <ul className='flex gap-4'>
      {socials.map((social) => (
        <li
          key={social.link}
          className='transition-all hover:scale-125 ease-out'>
          <Link href={social.link} aria-label={social.ariaLabel}>
            {social.icon}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Socials;
