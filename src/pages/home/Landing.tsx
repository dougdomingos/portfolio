import Image from 'next/image';

const Landing = () => (
  <section className='flex flex-col lg:flex-row lg:justify-around gap-4 items-center py-12'>
    <Image
      src={'https://avatars.githubusercontent.com/u/95258393?v=4'}
      alt='Profile picture'
      width={400}
      height={400}
      className='rounded-full shadow-lg max-w-[200px] lg:w-full lg:max-w-[350px] h-auto lg:order-last'
    />
    <div className='flex flex-col gap-2 text-center lg:text-left'>
      <h1 className='font-display font-bold text-2xl lg:text-4xl'>
        Hello world, I&apos;m <br />
        <span className='text-primary'>Douglas Domingos</span>
      </h1>
      <p className='text-xl lg:text-2xl max-w-[50ch]'>
        Computer Science undergraduate at Federal University of Campina Grande,
        who finds happiness in a cup of coffee and overcoming challenges
      </p>
    </div>
  </section>
);

export default Landing;
