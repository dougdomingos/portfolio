const Footer = () => (
  <footer className='flex flex-col gap-2 py-4 text-sm justify-center text-center w-full'>
    <span>Douglas Domingos &copy; {new Date().getFullYear()}</span>
    <span>
      Made with <a href='https://nextjs.org'>Next.js 14</a>
    </span>
  </footer>
);

export default Footer;
