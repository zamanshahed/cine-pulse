'use client'
import useHomeStore from '@/app/store/HomeStore';
import { useState } from 'react';
import Carousel from 'react-simply-carousel'

const MovieCarousel = ({ homeMoviesData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] }) => {

    const [activeSlide, setActiveSlide] = useState(0);

    return (
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
                    background: "blue"
                }
            }}
            onRequestChange={setActiveSlide}
            forwardBtnProps={{
                children: ">",
                style: {
                    width: 60,
                    height: 60,
                    minWidth: 60,
                    alignSelf: "center"
                }
            }}
            backwardBtnProps={{
                children: "<",
                style: {
                    width: 60,
                    height: 60,
                    minWidth: 60,
                    alignSelf: "center"
                }
            }}

            itemsToShow={5}
            speed={400}
            centerMode
            autoplayDelay={2500}
            autoplay
        >
            {
                homeMoviesData.map((item, index) => (
                    <div key={index} className='bg-rose-400 text-white border-[10px] border-white w-[250px] h-[350px]' >{item?.original_title}</div>
                ))
            }

        </Carousel>
    )
}

export default MovieCarousel