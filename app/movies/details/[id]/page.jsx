'use client'

import { getMovieDetails } from "@/app/store/MovieStore"
import { useEffect } from "react"

const MovieDetails = ({ params }) => {

    useEffect(() => {
        getMovieDetails(params.id);
    })

    return (
        <div>MovieDetails of id: {params.id}</div>
    )
}

export default MovieDetails