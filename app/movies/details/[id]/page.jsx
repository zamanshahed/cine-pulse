'use client'

import { IMAGE_BASE_URL } from "@/app/api/Config"
import useMovieStore, { getMovieDetails } from "@/app/store/MovieStore"
import { formatDate, getLanguageName, minuteToHours } from "@/app/utils/UtilityFunctions"
import YouTube from 'react-youtube';
import { useEffect, useState } from "react"
import { FcRating } from 'react-icons/fc'
import MovieGallery from "./MovieGallery";
import TextTruncate from 'react-text-truncate';
import MovieCarousel from "@/app/components/carousel/MovieCarousel";

const MovieDetails = ({ params }) => {
    const { movieDetails, movieDetailsVideos, movieDetailsSimilar } = useMovieStore();
    const [showFullText, setShowFullText] = useState(false);

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
            {/*r         title */}
            <div className="text-3xl lg:text-5xl font-extralight uppercase text-rose-500">{movieDetails?.title}</div>
            {movieDetails?.tagline ? <div className="text-base font-light">{movieDetails?.tagline}</div> : ""}

            {/*b         poster -- details -- trailer/video */}
            <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between pt-4 sm:pt-6 xl:pt-10 space-y-5 xl:space-y-0">

                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-5 space-y-5 sm:space-y-0">
                    {/*e            poster */}
                    <div>
                        <img src={IMAGE_BASE_URL + movieDetails?.poster_path} alt="backdrop image" className='peer rounded-lg object-cover' width={250} height={350} />
                    </div>

                    {/*g             details */}
                    <div className="space-y-2">
                        <div className="flex items-start space-x-2">
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
                            {!showFullText ? <TextTruncate
                                line={7}
                                element="span"
                                truncateText="…"
                                text={movieDetails?.overview}
                                textTruncateChild={<span className="text-rose-400 cursor-pointer" onClick={() => setShowFullText(true)}>Show more</span>}
                            />
                                :
                                <>
                                    {movieDetails?.overview}
                                    <span className="text-rose-400 cursor-pointer pl-1" onClick={() => setShowFullText(false)}>Show less</span>
                                </>
                            }

                        </div>
                    </div>
                </div>
                <div className="flex items-start bg-black h-[250px] w-[320px] sm:h-[375px] sm:w-[600px] ">
                    {/* VIDEO: {mainTrailer?.name} */}
                    <div className="hidden sm:block" >
                        <YouTube videoId={mainTrailer?.key} opts={opts} />
                    </div>
                    <div className="sm:hidden block">
                        <YouTube videoId={mainTrailer?.key} opts={opts_small} />
                    </div>
                </div>
            </div>

            {/* related movies */}
            <div className="py-5">
                <div className="text-3xl pb-5 font-extralight">Similar Movies</div>
                <MovieCarousel homeMoviesData={movieDetailsSimilar} />
            </div>

            <div className="pt-10">
                <div className="text-3xl pb-5 font-extralight">Gallery</div>
                <MovieGallery />
            </div>
        </div>
    )
}

export default MovieDetails