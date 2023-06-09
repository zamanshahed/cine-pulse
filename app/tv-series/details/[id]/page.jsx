'use client'

import { IMAGE_BASE_URL } from "@/app/api/Config"

import { formatDate, getLanguageName, minuteToHours } from "@/app/utils/UtilityFunctions"
import YouTube from 'react-youtube';
import { useEffect, useState } from "react"
import { FcRating } from 'react-icons/fc'

import TextTruncate from 'react-text-truncate';
import useTvSeriesStore, { getTvSeriesDetails } from "@/app/store/TvSeriesStore";
import MovieGallery from "@/app/movies/details/[id]/MovieGallery";
import TvSeriesGallery from "./TvSeriesGallery";

const TvSeriesDetails = ({ params }) => {
    const { tvSeriesDetails, tvSeriesVideos } = useTvSeriesStore();
    const [showFullText, setShowFullText] = useState(false);

    const genresFound = tvSeriesDetails?.genres?.map(obj => obj.name);
    const stringGenres = genresFound?.join(', ');

    const mainTrailer = tvSeriesVideos?.find(item => item.type === "Trailer");

    useEffect(() => {
        getTvSeriesDetails(params.id)
    }, [params.id]);

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
            <div className="text-3xl lg:text-5xl font-extralight uppercase text-rose-500">{tvSeriesDetails?.name}</div>
            {tvSeriesDetails?.tagline ? <div className="text-base font-light">{tvSeriesDetails?.tagline}</div> : ""}

            {/*b         poster -- details -- trailer/video */}
            <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between pt-4 sm:pt-6 xl:pt-10 space-y-5 xl:space-y-0">

                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-5 space-y-5 sm:space-y-0">
                    {/*e            poster */}
                    <div>
                        <img src={IMAGE_BASE_URL + tvSeriesDetails?.poster_path} alt="backdrop image" className='peer rounded-lg object-cover' width={250} height={350} />
                    </div>

                    {/*g             details */}
                    <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                            <FcRating size={24} />
                            <div>{parseFloat(tvSeriesDetails?.vote_average).toFixed(1)}</div>
                            <div>( {tvSeriesDetails?.vote_count} )</div>
                        </div>
                        <div>
                            Genre: {stringGenres}.
                        </div>
                        <div>
                            First Aired: {formatDate(tvSeriesDetails?.first_air_date)}.
                        </div>
                        <div>
                            Last Aired: {formatDate(tvSeriesDetails?.last_air_date)}.
                        </div>
                        <div>
                            Total Seasons: {tvSeriesDetails?.number_of_seasons}.
                        </div>
                        <div>
                            Total Episodes: {tvSeriesDetails?.number_of_episodes}.
                        </div>

                        <div>
                            Language: {getLanguageName(tvSeriesDetails?.original_language)}.
                        </div>

                        <div className="pt-2 sm:w-[300px]">
                            {!showFullText ? <TextTruncate
                                line={3}
                                element="span"
                                truncateText="…"
                                text={tvSeriesDetails?.overview}
                                textTruncateChild={<span className="text-rose-400 cursor-pointer" onClick={() => setShowFullText(true)}>Show more</span>}
                            />
                                :
                                <>
                                    {tvSeriesDetails?.overview}
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
            <div className="pt-10 max-w-[320px] lg:max-w-7xl">
                <div className="text-3xl pb-5 font-extralight">Gallery</div>
                <TvSeriesGallery />
            </div>
        </div>
    )
}

export default TvSeriesDetails