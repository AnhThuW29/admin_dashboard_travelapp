import React from "react";
import SideBar from "../../components/sidebar/SideBar.jsx";
import RightSide from "../../components/RightSide/RightSide.jsx";
import DataTable from "../../components/DataTable/DataTable.jsx";
import "./Client.css";

const Client = () => {
    return (
        <div className="App">
            <div className="AppBackground">
                <SideBar />
                <div className="client" style={{ margin: "3rem" }}>
                    <h3
                        style={{
                            marginTop: "1rem",
                            fontWeight: "bold",
                            fontSize: "20px",
                        }}
                    >
                        Khách hàng
                    </h3>
                    <DataTable />
                </div>
                <RightSide />
            </div>
        </div>
    );
};

export default Client;
