import Card from '@components/Card';
import clsx from 'clsx';

import skillSet from './skillset';

const SkillShowcase = () => {
  return (
    <section>
      <h2 className='text-2xl font-display font-bold mb-6'>My Skills</h2>
      <ul className='flex flex-wrap justify-center gap-4'>
        {skillSet.map(({ SkillIcon, title, description }) => (
          <li key={title}>
            <Card className='max-w-sm'>
              <SkillIcon
                weight='duotone'
                size={48}
                className={clsx(
                  'bg-white shadow-md p-2.5 rounded-full text-primary-dark mb-2',
                  'dark:bg-black dark:text-primary-light dark:shadow-none',
                )}
              />
              <h3 className='text-xl font-bold mb-2'>{title}</h3>
              <p className='text-md'>{description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillShowcase;
