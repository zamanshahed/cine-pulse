'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const CustomAccordion = ({
    title = '',
    desc = '',
    isGroupAccordion = false,
    customOnClick = () => { },
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            onClick={() => {
                setIsOpen(!isOpen);
            }}
            className={`border border-rose-400 p-5 rounded-lg cursor-pointer overflow-hidden`}>
            <div>{title}</div>

            <AnimatePresence>
                {isOpen && <motion.div
                    initial={{
                        height: 0,
                        opacity: 0,
                    }}
                    animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                            height: {
                                duration: 0.4,
                            },
                            opacity: {
                                duration: 0.25,
                                delay: 0.15,
                            },
                        },
                    }}
                    exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                            height: {
                                duration: 0.4,
                            },
                            opacity: {
                                duration: 0.25,
                            },
                        },
                    }}
                >

                    {/* {isOpen && <div className="pt-5">{desc}</div>} */}
                    <div className="pt-5">{desc}</div>
                </motion.div>}
            </AnimatePresence>
        </div >
    )
}

export default CustomAccordion