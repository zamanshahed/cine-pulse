import {AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className="py-5 w-full shadow-xl bg-[#28282D]">
            <div className="max-w-7xl w-full mx-auto">
                <div className="w-full flex justify-between items-center">
                    <div className="text-4xl font-bold cursor-pointer">CINE <span className='text-rose-500'>PULSE</span></div>
                    <div className='flex space-x-10 text-gray-300'>
                        <div className='cursor-pointer'>Home</div>
                        <div className='cursor-pointer'>Movies</div>
                        <div className='cursor-pointer'>Tv Series</div>
                    </div>
                    <div className='text-gray-300 cursor-pointer flex items-center space-x-3'><span>Search</span> <AiOutlineSearch size={20}/> </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar