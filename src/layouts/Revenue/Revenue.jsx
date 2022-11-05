import React from 'react'
import SideBar from '../../components/sidebar/SideBar.jsx';
import MainDash from '../../components/MainDash/MainDash.jsx';
import RightSide from '../../components/RightSide/RightSide.jsx';
import './Revenue.css'

const Revenue = () => {
    return (
        <div className='App'>
            <div className="AppBackground">
                <SideBar />
                <MainDash />
                <RightSide />
            </div>
        </div>
    )
}

export default Revenue
