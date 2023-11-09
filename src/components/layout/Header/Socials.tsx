import Link from 'next/link';

import { Social } from '@customTypes/Socials';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

const socials: Social[] = [
  {
    icon: <GithubLogo size={32} weight='fill' />,
    link: 'https://github.com/dougdomingos',
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
  },
];

const Socials = () => (
  <div>
    <ul className='flex gap-4'>
      {socials.map((social) => (
        <li
          key={social.link}
          className='transition-all hover:scale-125 ease-out'>
          <Link href={social.link}>{social.icon}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Socials;
