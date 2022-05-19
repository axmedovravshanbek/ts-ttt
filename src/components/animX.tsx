import React from 'react';
import {motion} from 'framer-motion';

const Anim0: React.FC = () => {
    return (
        <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                strokeDasharray={200}
                initial={{
                    strokeDashoffset: 200,
                }}
                animate={{
                    strokeDashoffset: 0,
                    transition: {
                        duration: 1,
                    }
                }}

                d="M34.6395 34.6396L3.1446 3.1447"
                strokeWidth="5.56757"
                strokeLinecap="round"
            />
            <motion.path
                strokeDasharray={200}
                initial={{
                    strokeDashoffset: 200,
                    // strokeWidth:30
                }}
                animate={{
                    strokeDashoffset: 0,
                    // strokeWidth:7,
                    transition: {
                        duration: 1,
                        delay: 0.5
                    }
                }}
                d="M34.6393 3.1447L3.14441 34.6396"
                stroke="#fff"
                strokeWidth="5.56757"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default Anim0;