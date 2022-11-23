import React, { useEffect, useState } from 'react'
import SideBar from '../../components/sidebar/SideBar.jsx';
import MainDash from '../../components/MainDash/MainDash.jsx';
import RightSide from '../../components/RightSide/RightSide.jsx';
import './Home.css'


export default function Home() {

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
