import React, { useEffect, useState } from "react";
import SideBar from "../../components/sidebar/SideBar.jsx";
import MainDash from "../../components/MainDash/MainDash.jsx";
import RightSide from "../../components/RightSide/RightSide.jsx";
import DataTable2 from "../../components/DataTable/DataTable2.jsx";
import "./Partner.css";
import axiosClient from "Data/client.js";

const Partner = () => {
    return (
        <div className="App">
            <div className="AppBackground">
                <SideBar />
                <div className="partner" style={{ margin: "3rem" }}>
                    <h3
                        style={{
                            marginTop: "1rem",
                            fontWeight: "bold",
                            fontSize: "20px",
                        }}
                    >
                        Đối tác
                    </h3>
                    <DataTable2 />
                </div>
                <RightSide />
            </div>
        </div>
    );
};

export default Partner;
