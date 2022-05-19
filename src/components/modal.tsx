import React from 'react';
import {AnimatePresence, motion} from "framer-motion";

type ModalProps = {
    shown: boolean
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({shown, children}) => {
    return (
            <AnimatePresence>
                {shown && <motion.div
                    className='modal'
                    key="modal"
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0 , transition:{delay:1}}}
                    exit={{opacity: 0, y: 500}}
                >
                    <div className='modal__body'>
                        {children}
                    </div>
                </motion.div>}
            </AnimatePresence>
    )
};

export default Modal;