
import { Movie } from '../types/movies';
import Link from 'next/link';
import { ChevronDownIcon, PlayIcon, PlusIcon, SpeakerWaveIcon, UserGroupIcon } from '@heroicons/react/16/solid';
import { MovieRating } from './MovieRating';

export const MovieInfo = ({ movie }: { movie: Movie }) => (
    <div className='absolute z-10 w-full rounded-b-mb bg-zinc-800 p-2 shadow-md transition lg:p-4'>
        <div className='flex flex-row items-center justify-between gap-2'>
        <div className='flex flex-row items-center gap-2'>
            <div className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover:bg-neutral-300 hover:text-black lg:h-10 lg:w-10'>
            <Link href={`/watch/${movie.id}`}>
                <PlayIcon className='w-4 lg:w-6' />
            </Link>
            </div>
            <div className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover:bg-neutral-300 hover:text-black lg:h-10 lg:w-10'>
            <Link href={`/watch/${movie.id}`}>
                <PlusIcon className='w-4 lg:w-6' />
            </Link>
            </div>
        </div>
        <div className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover:bg-neutral-300 hover:text-black lg:h-10 lg:w-10'>
            <Link href={`/watch/${movie.id}`}>
            <ChevronDownIcon className='w-4 lg:w-6' />
            </Link>
        </div>
        </div>
        <div className='mt-4 text-sm font-bold text-white lg:text-lg'>
        {movie.title}
        </div>

        <div className='mt-4 flex flex-col gap-2 text-sm'>
        <div className='flex flex-row items-center gap-2'>
            <SpeakerWaveIcon className='w-4' /> Double Atmos 4.1 4K
        </div>
        <div className='flex flex-row items-center gap-2'>
            <UserGroupIcon className='w-4' /> <MovieRating rating={movie.rating} />
        </div>
        </div>
        <div className='mt-4 flex flex-row items-center gap-2 text-[8px] text-white lg:text-sm'>
        <p>{movie.genres.join(' - ')}</p>
        </div>
    </div>
);