import React from "react";
import "./MainDash.css";
import Cards from "../Cards/Cards.jsx";
import Table from "../Table/Table.jsx";
const MainDash = () => {
    return (
        <div>
            <h1
                style={{
                    marginTop: "4rem",
                    fontWeight: "bold",
                    fontSize: "20px",
                }}
            >
                Dashboard
            </h1>
            <div className="MainDash">
                <Cards />
                <Table />
            </div>
        </div>
    );
};

export default MainDash;
