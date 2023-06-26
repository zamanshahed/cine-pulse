/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from "react";

const CustomCarousel = ({
    data = [
        <div className="text-center w-[500px] h-[500px] text-[120px] bg-zinc-600" key={1}><img className="w-full h-full object-cover" alt="test image" src="https://picsum.photos/200/200?random=1" /></div>,
        <div className="text-center w-[500px] h-[500px] text-[120px] bg-zinc-600" key={2}><img className="w-full h-full object-cover" alt="test image" src="https://picsum.photos/200/200?random=2" /></div>,
        <div className="text-center w-[500px] h-[500px] text-[120px] bg-zinc-600" key={3}><img className="w-full h-full object-cover" alt="test image" src="https://picsum.photos/200/200?random=3" /></div>,
        <div className="text-center w-[500px] h-[500px] text-[120px] bg-zinc-600" key={4}><img className="w-full h-full object-cover" alt="test image" src="https://picsum.photos/200/200?random=4" /></div>,
        <div className="text-center w-[500px] h-[500px] text-[120px] bg-zinc-600" key={5}><img className="w-full h-full object-cover" alt="test image" src="https://picsum.photos/200/200?random=5" /></div>,
        <div className="text-center w-[500px] h-[500px] text-[120px] bg-zinc-600" key={6}><img className="w-full h-full object-cover" alt="test image" src="https://picsum.photos/200/200?random=6" /></div>,
        <div className="text-center w-[500px] h-[500px] text-[120px] bg-zinc-600" key={7}><img className="w-full h-full object-cover" alt="test image" src="https://picsum.photos/200/200?random=7" /></div>,
        <div className="text-center w-[500px] h-[500px] text-[120px] bg-zinc-600" key={8}><img className="w-full h-full object-cover" alt="test image" src="https://picsum.photos/200/200?random=8" /></div>,
        <div className="text-center w-[500px] h-[500px] text-[120px] bg-zinc-600" key={9}><img className="w-full h-full object-cover" alt="test image" src="https://picsum.photos/200/200?random=9" /></div>,
    ]
}) => {
    const [currentCarouselItem, setCurrentCarouselItem] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentCarouselItem === data.length - 1) setCurrentCarouselItem(0);
            else setCurrentCarouselItem(currentCarouselItem + 1);
        }, 1250);

        return () => clearInterval(interval);
    })
    return (
        <div className="flex items-center justify-between w-[500px] h-[500px] border-2 border-violet-500 overflow-hidden">
            {
                data?.map((item, index) =>
                    <div
                        key={index}
                        className={`w-[500px] h-[500px] transition-all ease-in-out duration-1000
                            ${index === currentCarouselItem ? 'text-rose-500 scale-125' : ''} 
                        `}
                        style={{ transform: `translate(-${currentCarouselItem * 100}%)` }}
                    >
                        {item}
                    </div>
                )
            }
        </div>
    )
}

export default CustomCarousel