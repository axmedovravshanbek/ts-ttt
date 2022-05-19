import * as React from "react";
import {motion, useMotionValue, useTransform} from "framer-motion";

const Slider: React.FC = () => {
    const x = useMotionValue(0);
    const input = [-200, 0, 200]
    const opacity1 = useTransform(x, input, [0, 1, 1])
    const opacity2 = useTransform(x, input, [0, 1, 0])
    const opacity3 = useTransform(x, input, [1, 1, 0])


    return (
        <div className='slider-page'>
            <img src='src/img/thumb-down.svg' alt='thumbsDown'/>
            <img src='src/img/arrow-left.svg' alt='left'/>
            <div className='cards'>
                <div className="cards__item" style={{left: -140, top: -170}}/>
                <div className="cards__item" style={{left: -120, top: -150}}/>
                <motion.div
                    drag="x"
                    className='cards__item cards__item-drag' style={{x, left: -100, top: -130}}
                    dragConstraints={{left: -300, right: 300}}
                >
                    <motion.div>
                        <motion.h3 style={{opacity: opacity1}}>Like</motion.h3>
                        <motion.h3 style={{opacity: opacity2}}>Or</motion.h3>
                        <motion.h3 style={{opacity: opacity3}}>Dislike</motion.h3>
                    </motion.div>
                </motion.div>
            </div>
            <img src='src/img/arrow-right.svg' alt='right'/>
            <img src='src/img/thumb-up.svg' alt='thumbsUp'/>
        </div>
    );
};
export default Slider