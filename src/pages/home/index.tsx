import Experiences from './Experiences';
import Landing from './Landing';

const Home = () => (
  <div className='flex flex-col gap-8 py-10'>
    <Landing />
    <Experiences />
  </div>
);

export default Home;
