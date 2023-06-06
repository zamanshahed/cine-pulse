'use client'
import { IMAGE_BASE_URL, IMAGE_BASE_URL_HD } from '@/app/api/Config';
import useMovieStore from '@/app/store/MovieStore';
import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const MovieGallery = () => {
    const { movieDetailsImages } = useMovieStore();
    const [movieImages, setMovieImages] = useState([]);

    useEffect(() => {
        const t_array = [];
        let counter = 0;
        movieDetailsImages?.map((item) => {
            counter++;
            let data = {
                original: IMAGE_BASE_URL + item?.file_path,
                thumbnail: IMAGE_BASE_URL + item?.file_path,
            }
            if (counter < 6)
                t_array.push(data);
        });

        setMovieImages(t_array);
    }, [movieDetailsImages]);
    return (
        <div
            onClick={() => {
                console.log('movie images: ', movieDetailsImages);
                console.log('movie images(movieImages): ', movieImages);
            }}
        >
            <ImageGallery items={movieImages} />
        </div>
    )
}

export default MovieGallery