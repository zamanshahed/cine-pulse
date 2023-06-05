'use client'

import { IMAGE_BASE_URL } from "@/app/api/Config"
import useMovieStore, { getMovieDetails } from "@/app/store/MovieStore"
import { formatDate, getLanguageName, minuteToHours } from "@/app/utils/UtilityFunctions"
import YouTube from 'react-youtube';
import { useEffect } from "react"
import { FcRating } from 'react-icons/fc'

const MovieDetails = ({ params }) => {
    const { movieDetails, movieDetailsVideos } = useMovieStore();

    useEffect(() => {
        getMovieDetails(params.id);


    }, [params.id]);

    const genresFound = movieDetails?.genres?.map(obj => obj.name);
    const stringGenres = genresFound?.join(', ');

    const mainTrailer = movieDetailsVideos?.find(item => item.type === "Trailer");

    // react youtube player configs
    const opts = {
        height: '375',
        width: '600',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    const opts_small = {
        height: '250',
        width: '320',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <div className="relative" >
            {/* <div className="h-[1350] w-[1250] blur-sm absolute top-0 left-0">
                <img
                    src={IMAGE_BASE_URL + movieDetails?.backdrop_path}
                    alt="backdrop image"
                    className='rounded-lg opacity-20'
                    width={1250}
                    height={1350}
                />
            </div> */}
            {/*r         title */}
            <div className="text-3xl lg:text-5xl font-semibold uppercase text-rose-500">{movieDetails?.title}</div>
            {movieDetails?.tagline ? <div className="text-base font-light">{movieDetails?.tagline}</div> : ""}

            {/*b         poster -- details -- trailer/video */}
            <div className="flex flex-col xl:flex-row xl:justify-between pt-4 sm:pt-6 xl:pt-10 space-y-5">

                <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-5">
                    {/*e            poster */}
                    <div>
                        <img src={IMAGE_BASE_URL + movieDetails?.poster_path} alt="backdrop image" className='peer rounded-lg object-cover' width={250} height={350} />
                    </div>

                    {/*g             details */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <FcRating size={24} />
                            <div>{parseFloat(movieDetails?.vote_average).toFixed(1)}</div>
                            <div>( {movieDetails?.vote_count} )</div>
                        </div>
                        <div>
                            Genre: {stringGenres}.
                        </div>
                        <div>
                            Release: {formatDate(movieDetails?.release_date)}.
                        </div>
                        <div>
                            Duration: {minuteToHours(movieDetails?.runtime)}.
                        </div>
                        <div>
                            Language: {getLanguageName(movieDetails?.original_language)}.
                        </div>

                        <div className="pt-2 sm:w-[300px]">
                            {movieDetails?.overview}
                        </div>
                    </div>
                </div>
                <div>
                    {/* VIDEO: {mainTrailer?.name} */}
                    <div className="hidden sm:block" >
                        <YouTube videoId={mainTrailer?.key} opts={opts} />
                    </div>
                    <div className="sm:hidden block">
                        <YouTube videoId={mainTrailer?.key} opts={opts_small} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails