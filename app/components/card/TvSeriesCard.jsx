import { IMAGE_BASE_URL } from '@/app/api/Config'
import Link from 'next/link'
import React from 'react'

const TvSeriesCard = ({ data }) => {
    return (
        <Link href={`/tv-series/details/${data.id}`}>
            <img
                className='rounded-lg w-[250px] h-[350px]'
                src={IMAGE_BASE_URL + data?.poster_path}
                alt={data?.name}
            />
            <div>{data?.name}</div>
        </Link>
    )
}


export default TvSeriesCard

