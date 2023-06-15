'use client'
import { useState } from 'react';
import CustomSelect from '../components/select/CustomSelect'

const TestPage = () => {
    const [updateValues, setUpdateValues] = useState("");
    return (
        <div>
            <div
                className='w-full text-center text-4xl font-extralight text-white italic'
            >PLAY GROUND</div>

            <form onSubmit={(e) => e.preventDefault()} className="pt-10">
                <CustomSelect
                    required
                    value={updateValues}
                    onChange={(e) => setUpdateValues(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>

            <div className="py-10">Update Value: { updateValues}</div>
            <input
                className='bg-inherit text-white border-cyan-500 border'
                type="number" placeholder='OKK'
                onChange={(e) => setUpdateValues(e.target.value)} 
                value={updateValues}    
            />
        </div>
    )
}

export default TestPage