import React from "react";
import SideBar from "../../components/sidebar/SideBar.jsx";
import MainDash from "../../components/MainDash/MainDash.jsx";
import RightSide from "../../components/RightSide/RightSide.jsx";
import Table from "../../components/Table/Table";
import "./Revenue.css";

const Revenue = () => {
    return (
        <div className="App">
            <div className="AppBackground">
                <SideBar />
                <div>
                    <h2
                        style={{
                            marginTop: "1rem",
                            fontWeight: "bold",
                            fontSize: "20px",
                        }}
                    >
                        Doanh thu chi tiết
                    </h2>
                    <div className="container">
                        <Table />
                        <Table />
                    </div>
                </div>
                <RightSide />
            </div>
        </div>
    );
};

export default Revenue;
