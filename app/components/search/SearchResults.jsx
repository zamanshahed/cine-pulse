import React from 'react'
import MovieCard from '../card/MovieCard';

export const SearchResults = ({
    data = [],
}) => {
    return (
        <div
            onClick={() => {
                console.log('data: ', data);
            }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-10'
        >
            {
                data?.results?.map((item, index) => {
                    return item?.poster_path && <MovieCard key={index} data={item} />
                })
            }
        </div>
    )
}
