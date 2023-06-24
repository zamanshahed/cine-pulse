'use client'
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 lg:py-5 py-2 w-full shadow-xl bg-[#28282D] z-50">

            {/* small screen navbar: (smaller than 1024px)*/}
            <div className={`flex flex-col lg:hidden ${isMenuOpen ? "h-[250px]" : "h-[40px]"} transition-all duration-300 px-1`}>
                <div className="flex items-center w-full justify-between sm:px-10 px-5 ">
                    <Link href={'/'} >
                        <div className="text-3xl font-bold cursor-pointer">CINE <span className='text-rose-500'>PULSE</span></div>
                    </Link>

                    <div
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`cursor-pointer text-white ${isMenuOpen ? 'rotate-90' : '-rotate-0'} transition-all duration-150`}
                    >
                        {isMenuOpen ? <AiOutlineClose size={24} />
                            : <AiOutlineMenu size={24} />}
                    </div>
                </div>
                {isMenuOpen ?
                    <>
                        <div className='bg-rose-500 h-[2px] mt-3'></div>
                        <div className="flex flex-col items-start justify-center space-y-5 mt-5">
                            <Link href={'/'} >
                                <div className='text-gray-300 cursor-pointer'>Home</div>
                            </Link>
                            <Link href={'/movies'} >
                                <div className='text-gray-300 cursor-pointer'>Movies</div>
                            </Link>
                            <Link href={'/tv-series'} >
                                <div className='text-gray-300 cursor-pointer'>Tv Series</div>
                            </Link>
                        </div>
                    </>
                    : ""}
            </div>


            {/* desktop nav bar (1024px and higher) */}
            <div className="max-w-7xl w-full mx-auto lg:block hidden px-5">
                <div className="w-full flex justify-between items-center">
                    <Link href={'/'} >
                        <div className="text-4xl font-bold cursor-pointer">CINE <span className='text-rose-500'>PULSE</span></div>
                    </Link>
                    <div className='flex space-x-10 text-gray-300'>
                        <Link href={'/'} >
                            <div className='cursor-pointer'>Home</div>
                        </Link>
                        <Link href={'/movies'} >
                            <div className='cursor-pointer'>Movies</div>
                        </Link>
                        <Link href={'/tv-series'} >
                            <div className='cursor-pointer'>Tv Series</div>
                        </Link>

                    </div>
                    <div className='text-gray-300 cursor-pointer flex items-center space-x-3'><span>Search</span> <AiOutlineSearch size={20} /> </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar