'use client'
import { IMAGE_BASE_URL, IMAGE_BASE_URL_HD } from '@/app/api/Config';
import useMovieStore from '@/app/store/MovieStore';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MovieGallery = () => {
    const { movieDetailsImages } = useMovieStore();
    const [movieImages, setMovieImages] = useState([]);

    // slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        const t_array = [];
        let counter = 0;
        movieDetailsImages?.map((item) => {
            counter++;
            let data = {
                original: IMAGE_BASE_URL_HD + item?.file_path,
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
            className='w-[330px] sm:w-full mx-auto '
        >
            {/* <ImageGallery items={movieImages} /> */}
            <Slider {...settings}>
                {movieImages.map((item) => (
                    <div key={item.original} className='sm:w-full w-[320px] max-h-[700px]' >
                        <img src={item.original} alt={item.original} className='w-full h-full object-cover' />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default MovieGallery