import React from "react";
import SideBar from "../../components/sidebar/SideBar.jsx";
import DataTable2 from "../../components/DataTable/DataTable2.jsx";
import "./Partner.css";

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
            </div>
        </div>
    );
};

export default Partner;
