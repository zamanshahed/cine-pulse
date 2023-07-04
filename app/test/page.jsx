'use client'
import { useState } from 'react';
import CustomSelect from '../components/select/CustomSelect'
import CustomCalendar from '../components/calendar/CustomCalendar';
import AnimatedOne from '../components/framer-components/AnimatedOne';
import CustomCarousel from '../components/carousel/CustomCarousel';

const TestPage = () => {
    const [updateValues, setUpdateValues] = useState("");
    return (
        <div>
            <div
                className='w-full text-center text-4xl font-extralight text-white italic'
            >PLAY GROUND</div>

            <form onSubmit={(e) => e.preventDefault()} className="pt-10">
                <div className='pb-5'>Custom Select</div>
                <CustomSelect
                    required
                    value={updateValues}
                    onChange={(e) => setUpdateValues(e.target.value)}
                />
                <button className='my-5' type='submit'>Submit</button>
            </form>

            {/* <div className="py-10">Update Value: { updateValues}</div>
            <input
                className='bg-inherit text-white border-cyan-500 border'
                type="number" placeholder='OKK'
                onChange={(e) => setUpdateValues(e.target.value)} 
                value={updateValues}    
            /> */}

            {/* <div className="py-5">
                <CustomCarousel />
            </div> */}

            <div className="py-5">
                <AnimatedOne />
            </div>

            {/* <div className="pt-10"></div>
            <CustomCalendar /> */}
        </div>
    )
}

export default TestPage