import React, { memo, useEffect, useState } from "react";

import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import MainDash from "./components/MainDash/MainDash";
import RightBar from "./components/RightSide/RightSide";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./style/dark.css";

import Home from "./layouts/Home/Home.jsx";
import Client from "./layouts/CLient/Client.jsx";
import NguoiMua from "./layouts/NguoiDung/NguoiMua.jsx";
import NguoiBan from "./layouts/NguoiDung/NguoiBan.jsx";
import Tour from "./layouts/Tour/Tour.jsx";
import Revenue from "./layouts/Revenue/Revenue.jsx";
import Post from "./layouts/Post/Post.jsx";
import Partner from "layouts/DoiTac/Partner.jsx";
import Test from "./test";
import useToken from "./useToken";
import AddNV from "layouts/AddNV/AddNV";
import NhanVien from "layouts/NhanVien/NhanVien";
import SingleNV from "layouts/NhanVien/SingleNV";
import ChinhSuaTour from "layouts/Post/ChinhSuaTour";
import ThemTour from "layouts/Post/ThemTour";

function App() {
    const [token, setToken] = useState("");

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userData")) || "";
        setToken(userData);
    }, [setToken]);

    if (!token) {
        return <Test setToken={setToken} />;
    } else{
        console.log("ERR APP.js");
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path="nhanvien">
                        <Route index element={<NhanVien />} />
                        <Route path="addNV" element={<AddNV />} />
                        <Route path=":nhanvienID" element={<SingleNV />} />
                    </Route>
                    <Route path="client">
                        <Route index element={<Client />} />
                        <Route path=":clientID" element={<NguoiMua />} />
                    </Route>
                    <Route path="partner">
                        <Route index element={<Partner />} />
                        <Route path=":partnerID" element={<NguoiBan />} />
                    </Route>
                    <Route path="tour">
                        <Route index element={<Tour />} />
                        <Route path=":postId" element={<Post />} />
                        <Route path="update:ID" element={<ChinhSuaTour />} />
                        <Route path="ThemTour" element={<ThemTour />} />
                    </Route>
                    {/* <Route path="login">
                        <Route index element={<Test />} />
                    </Route> */}
                    <Route path="revenue" element={<Revenue />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
