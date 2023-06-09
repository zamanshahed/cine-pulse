import React from 'react'
import MovieCard from '../card/MovieCard';
import TvSeriesCard from '../card/TvSeriesCard';

export const SearchResults = ({
    data = [],
    is_movie = true
}) => {
    return (
        <div
            onClick={() => {
                console.log('data: ', data);
            }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10'
        >
            {is_movie ?
                data?.results?.map((item, index) => {
                    return item?.poster_path && <MovieCard key={index} data={item} />
                })
                : data?.results?.map((item, index) => {
                    return item?.poster_path && <TvSeriesCard key={index} data={item} />
                })
            }
        </div>
    )
}
