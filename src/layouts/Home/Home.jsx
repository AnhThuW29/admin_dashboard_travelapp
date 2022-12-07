import React from "react";
import SideBar from "../../components/sidebar/SideBar.jsx";
import MainDash from "../../components/MainDash/MainDash.jsx";
import "./Home.css";

export default function Home() {
    return (
        <div className="App">
            <div className="AppBackground">
                <SideBar />
                <MainDash />
            </div>
        </div>
    );
}
