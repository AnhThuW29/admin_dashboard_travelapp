import React, { useEffect, useState } from 'react'
import SideBar from '../../components/sidebar/SideBar.jsx';
import MainDash from '../../components/MainDash/MainDash.jsx';
import RightSide from '../../components/RightSide/RightSide.jsx';
import DataTable from '../../components/DataTable/DataTable.jsx'
import './Client.css'
import axiosClient from 'Data/client.js';

const Client = () => {
    
    return (
        <div className='App'>
            <div className="AppBackground">
                <SideBar />
                <div className="client" style={{margin: '3rem',}}>
                    <h3>Khách hàng</h3>
                    <DataTable />
                </div>
                <RightSide />
            </div>
        </div>
    )
}

export default Client