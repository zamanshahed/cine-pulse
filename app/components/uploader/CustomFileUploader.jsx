'use client'

import { useRef, useState } from "react";

const CustomFileUploader = ({ onFileSelect = () => { } }) => {
    const inputClickRef = useRef(null);
    const [fileName, setFileName] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onFileSelect(file);
            setFileName(file.name);
        }
    };

    return (
        <div>
            <button
                onClick={() => {
                    inputClickRef.current.click();
                }}
            >{fileName ?? 'Click here to upload'}</button>

            <input className='hidden' type="file" ref={inputClickRef} onChange={handleFileChange} />
        </div>
    )
}

export default CustomFileUploader