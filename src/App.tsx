import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {observer} from "mobx-react-lite";
import Tictac from "./pages/tictac";
import Scroll from "./pages/scroll";
import Slider from "./pages/slider";
import NavMenu from "./components/navMenu";
import './styles/style.scss'

const App: React.FC = () => {
    const location = useLocation();
    console.log(location)
    const bgColors = {
        '/': '#FF0266',
        '/slider': '#0336FF',
        '/scroll': '#FFDE03'
    }
    return (
        // @ts-ignore
        <div className="app" style={{backgroundColor: bgColors[location.pathname]}}>
            <NavMenu/>
            <Routes>
                <Route path='/' element={<Tictac/>}/>
                <Route path='slider' element={<Slider/>}/>
                <Route path='scroll' element={<Scroll/>}/>
            </Routes>
        </div>
    );
};

export default observer(App);
