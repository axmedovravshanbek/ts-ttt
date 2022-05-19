import React, {useState} from 'react';
import Logo from "./logo";
import {AnimatePresence, motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import {xStore} from "../js/xStore";

const NavMenu: React.FC = () => {
    const [menuShown, setMenuShown] = useState<boolean>(false)
    return (
        <div className='nav'>
            <div onClick={() => setMenuShown(!menuShown)}>
                <Logo/>
            </div>
            <AnimatePresence>
                {menuShown &&
                    <motion.div
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        exit={{scale: 0}}
                        className="nav__menu"
                    >
                        {xStore.menu.map(({link, text}) => (
                            <NavLink onClick={() => setMenuShown(false)} key={link} to={link}>{text}</NavLink>
                        ))}
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
};

export default NavMenu;