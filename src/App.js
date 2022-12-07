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

function App() {
    const [token, setToken] = useState("");

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userData")) || "";
        setToken(userData);
    }, [setToken]);

    if (!token) {
        return <Test setToken={setToken} />;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path="nhanvien" element={<AddNV />} />
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
