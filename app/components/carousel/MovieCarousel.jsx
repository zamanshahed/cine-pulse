'use client'
import { IMAGE_BASE_URL } from '@/app/api/Config';
import useHomeStore from '@/app/store/HomeStore';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Carousel from 'react-simply-carousel'

const MovieCarousel = ({ homeMoviesData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], isTvSeries = false }) => {

    const [activeSlide, setActiveSlide] = useState(0);
    const [isHoverMode, setIsHoverMode] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHoverMode(true)}
            onMouseLeave={() => setIsHoverMode(false)}
        >
            <Carousel

                containerProps={{
                    style: {
                        width: "100%",
                        justifyContent: "space-between",
                        userSelect: "none"
                    }
                }} preventScrollOnSwipe
                swipeTreshold={60}
                activeSlideIndex={activeSlide}
                activeSlideProps={{
                    style: {
                        // border: '2px solid #F43F5E'
                    }
                }}
                onRequestChange={setActiveSlide}
                // forwardBtnProps={{
                //     children: ">",
                //     style: {
                //         width: 60,
                //         height: 60,
                //         minWidth: 60,
                //         alignSelf: "center"
                //     }
                // }}
                // backwardBtnProps={{
                //     children: "<",
                //     style: {
                //         width: 60,
                //         height: 60,
                //         minWidth: 60,
                //         alignSelf: "center"
                //     }
                // }}

                itemsToShow={5}
                speed={400}
                centerMode
                autoplayDelay={3000}
                autoplay={!isHoverMode}
            >
                {
                    homeMoviesData.map((item, index) => (
                        <Link href={isTvSeries ? `/tv-series/details/${item.id}` : `/movies/details/${item.id}`} key={index} >
                            <div className='relative cursor-pointer bg-zinc-700 text-white border-[10px] rounded-lg border-zinc-700 w-[250px] h-[350px]' >
                                <img src={IMAGE_BASE_URL + item?.poster_path} alt="backdrop image" className='peer rounded-lg object-cover' width={250} height={350} />
                                <div className="absolute peer-hover:block hover:block transition-opacity duration-150 hidden bg-slate-800/60 w-full text-center text-base font-semibold bottom-5 left-1/2 -translate-x-1/2">{isTvSeries ? item?.name : item?.title}</div>
                            </div>
                        </Link>
                    ))
                }

            </Carousel>
        </div>
    )
}

export default MovieCarousel