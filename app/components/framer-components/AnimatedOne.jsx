import React from 'react'
import { motion } from "framer-motion"

const AnimatedOne = () => {
    return (
        <div>
            <motion.div
                className='w-20 h-20 bg-rose-500 text-center text-4xl font-extralight text-white italic'
                animate={{
                    scale: [2, 1, 2, 1, 2],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            />

        </div>
    )
}

export default AnimatedOne