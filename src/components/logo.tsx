import React from 'react';
import {motion} from "framer-motion";

const Logo: React.FC = () => {
    const letters = [
        "M30.832 30.2424V35.6287H20.7374V39.5073H30.832V44.8936H34.4698V39.5073V35.6287V30.2424H30.832Z",
        "M34.4701 82.8207H28.3529L22.5723 76.6547L20.0005 79.3979L24.8733 84.5938L20.0005 89.7931L22.5723 92.5347L28.0461 86.6993H34.4701V82.8207Z",
        "M30.8319 65.6923H25.0529C24.4142 65.6923 23.8961 65.1179 23.8961 64.4083C23.8961 63.7037 24.4142 63.1294 25.0529 63.1294H30.8319V65.6923ZM30.8319 53.761V59.3309L22.4294 53.2183L20.3805 56.4257L24.8807 59.6982H24.5332C22.1853 59.6982 20.2819 61.8087 20.2819 64.4066C20.2819 67.0113 22.1853 69.1217 24.5332 69.1217H30.8319H34.4478H34.4697V53.7593H30.8319V53.761Z",
    ]
    return (
        <motion.svg
            whileHover={{scale: 1.5}}
            width="55" height="123" viewBox="0 0 55 123" fill="none" xmlns="http://www.w3.org/2000/svg">
            {letters.map((d, i) => (
                <motion.path
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: {delay: 0.3 * i}}}
                    key={i}
                    whileHover={{scale: 1.5}}
                    d={d}
                    fill="white"/>
            ))}
        </motion.svg>
    );
};

export default Logo;