import Image from 'next/image';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { Banner } from './components/Banner';


export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh] scrollbar-hide'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16 scrollbar-hide'>
        <Banner />
        <MovieRow sessionTitle='Trending Now' />
        <MovieRow sessionTitle='Top Rated' />
        <MovieRow sessionTitle='Action Movies' />
      </main>
    </div>
  );
}
