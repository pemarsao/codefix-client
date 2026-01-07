import { Movies } from '../types/movies';
import { MovieCard } from './MovieCard';



type MovieRowProps = {
  sessionTitle: string;
  movies: Movies;
};

export function MovieRow({ sessionTitle, movies }: MovieRowProps) {
  return <div className='flex-col space-y-4'>
    <div className='flex'>
      <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
        {sessionTitle}
      </h2>
    </div>
    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
      {movies.map((movie, index) => (
        <MovieCard 
          key={index} 
          movie={movie}
        />
      ))}
    </div>
  </div>;
}
