import React from 'react';
import {motion} from 'framer-motion';

const Anim0: React.FC = () => {
    return (
        <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
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
                d="M25.73 47.54C19.8508 47.54 14.2102 45.2152 10.0384 41.0727C5.86654 36.9302 3.50202 31.3061 3.46055 25.4271C3.41907 19.5481 5.70401 13.8912 9.81697 9.69025C13.9299 5.4893 19.5372 3.08517 25.4158 3.00222C31.2944 2.91927 36.9672 5.16424 41.1971 9.24747C45.427 13.3307 47.8706 18.9209 47.995 24.7987C48.1194 30.6766 45.9145 36.3651 41.8612 40.6237C37.808 44.8823 31.7335 47.3741 25.8566 47.54"
                strokeWidth="5.57"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default Anim0;