import { IMAGE_BASE_URL } from '@/app/api/Config'
import Link from 'next/link'
import React from 'react'

const MovieCard = ({ data }) => {
    return (
        <Link href={`/movies/details/${data.id}`}>
            <img
                className='rounded-lg w-[250px] h-[350px]'
                src={IMAGE_BASE_URL + data?.poster_path}
                alt={data?.title}
            />
            <div>{data?.title}</div>
        </Link>
    )
}

export default MovieCard