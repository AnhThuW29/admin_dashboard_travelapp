import React from "react";
import SideBar from "../../components/sidebar/SideBar.jsx";
import DataTable from "../../components/DataTable/DataTable.jsx";
import "./NhanVien.css";
import axiosClient from "Data/client.js";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NhanVien = () => {
    return (
        <div className="App">
            <div className="AppBackground">
                <SideBar />
                <div className="client" style={{ margin: "3rem" }}>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="col-span-3 sm:col-span-3">
                            <h3
                                style={{
                                    marginTop: "1rem",
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                }}
                            >
                                Nhân viên
                            </h3>
                        </div>
                        <div>
                            <Link
                                to={"/nhanvien/addNV"}
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                Thêm nhân viên
                            </Link>
                        </div>
                    </div>
                    <DataTable />
                </div>
            </div>
        </div>
    );
};

export default NhanVien;
