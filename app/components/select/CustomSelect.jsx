'use client'
import { AiFillCaretDown } from 'react-icons/ai'
import { useEffect, useRef, useState } from "react";

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

const CustomSelect = ({
    data = [
        { label: "One", value: 1 },
        { label: "Two", value: 2 },
        { label: "Three", value: 3 },
        { label: "Four", value: 4 },
        { label: "Five", value: 5 },
        { label: "Six", value: 6 },
        { label: "Seven", value: 7 },
        { label: "Eight", value: 8 },
    ],
    onChange = () => { },
    value = "",
    required = false,
    width = 'w-[300px]',
    placeholder = "Select a value from the options"
}) => {
    const [selectValue, setSelectValue] = useState(value);
    const [selectedLabel, setSelectedLabel] = useState("");
    const [showDropDown, setShowDropDown] = useState(false);

    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
    } = useComponentVisible(false);

    const handleSelection = (item) => {

        setSelectValue(item.value);
        setSelectedLabel(item.label);

        let res = { target: { value: item.value } };
        onChange(res);
    }

    useEffect(() => {
        // console.log('updated value: ', value);
        setSelectValue(value);

        let updatedLabel = "";
        updatedLabel = data?.find((item) => item?.value == value);
        setSelectedLabel(updatedLabel?.label ?? "");
        // console.log('updated label: ', updatedLabel);
    }, [value]);
    return (
        <div>
            <div
                onClick={() => { setIsComponentVisible(!isComponentVisible); }}
                className={`relative  ${width}`} >
                <input
                    onClick={(e) => { e.preventDefault(); }}
                    type="text"
                    value={selectedLabel}
                    onChange={(e) => {
                        // 
                    }}
                    required={required}
                    title="Select a value from the options"
                    onInvalid={(e) => {
                        if (selectedLabel)
                            e.target.setCustomValidity("");
                        else
                            e.target.setCustomValidity("Select a value from the options");
                    }}
                    className={`cursor-pointer ${width} py-3 px-2.5 bg-rose-500 rounded-lg caret-transparent outline-none`}
                />
                <div
                    className={`absolute top-[16px] right-2 ${!isComponentVisible ? "" : "rotate-180"} transition-all duration-300 cursor-pointer`}
                >
                    <AiFillCaretDown size={20} />
                </div>

                {/* placeholder */}
                {!selectedLabel && <div className="absolute top-[12px] left-[10px] text-neutral-300 select-none cursor-pointer">{placeholder}</div>}

                {/* options */}
                <div ref={ref} className="w-fit">
                    {isComponentVisible &&
                        <div
                            className={`absolute z-10 bg-rose-400 rounded-lg overflow-hidden ${width}`}>
                            {data.map((item, index) =>
                                <div
                                    onClick={() => {
                                        handleSelection(item)
                                    }}
                                    className="hover:bg-rose-500 cursor-pointer px-2 py-3" key={index}
                                >{item.label}</div>
                            )}
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default CustomSelect