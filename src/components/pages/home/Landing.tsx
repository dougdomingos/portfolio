import Image from 'next/image';

import clsx from 'clsx';

const Landing = () => (
  <section className='flex flex-col lg:flex-row lg:justify-between gap-4 items-center'>
    <Image
      src={'https://avatars.githubusercontent.com/u/95258393?v=4'}
      alt='Profile picture'
      width={400}
      height={400}
      className={clsx(
        'rounded-full shadow-lg max-w-[200px] lg:w-full lg:max-w-[350px] h-auto lg:order-last',
        'dark:shadow-none dark:ring-4 dark:ring-primary',
      )}
    />
    <div className='flex flex-col gap-2 text-center lg:text-left'>
      <h1 className='font-display font-bold text-2xl lg:text-4xl'>
        Hello world, I&apos;m <br />
        <span className='text-primary'>Douglas Domingos</span>
      </h1>
      <p className='text-xl lg:text-2xl max-w-[40ch]'>
        Software Developer and Computer Science student at Federal University of
        Campina Grande, fueled by a relentless curiosity and a passion for
        elegant code.
      </p>
    </div>
  </section>
);

export default Landing;
