'use client'
import React, { useEffect, useRef, useState } from 'react'

function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(
        initialIsVisible
    );
    const ref = useRef(null);

    const handleHideDropdown = (event) => {
        if (event.key === "Escape") {
            setIsComponentVisible(false);
        }
    };

    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return { ref, isComponentVisible, setIsComponentVisible };
}

const CustomSelect2 = () => {
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
    } = useComponentVisible(true);
    return (
        <div
            ref={ref}
            className='bg-red-500 w-fit'
        >
            {isComponentVisible && (
                <div style={{
                    border: "1px solid black",
                    width: 180
                }}>
                    <div>DROP DOWN</div>
                    <div>DROP DOWN</div>
                    <div>DROP DOWN</div>
                    <div>DROP DOWN</div>
                    <div>DROP DOWN</div>
                    <div>DROP DOWN</div>
                    <div>DROP DOWN</div>
                </div>
            )}
            {!isComponentVisible && (
                <p onClick={() => setIsComponentVisible(true)}>
                    Component hidden: Click me show component again
                </p>
            )}
        </div>
    );
}

export default CustomSelect2