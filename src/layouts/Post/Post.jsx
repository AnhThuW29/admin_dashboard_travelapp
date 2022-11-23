import React from 'react'
import SideBar from '../../components/sidebar/SideBar.jsx';
import MainDash from '../../components/MainDash/MainDash.jsx';
import RightSide from '../../components/RightSide/RightSide.jsx';
import './Post.css'

const Post = () => {
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

export default Post