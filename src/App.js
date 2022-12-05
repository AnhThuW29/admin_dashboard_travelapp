import "./App.css";
import { useContext, useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import MainDash from "./components/MainDash/MainDash";
import RightBar from "./components/RightSide/RightSide";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.css";

import Home from "./layouts/Home/Home.jsx";
import Client from "./layouts/CLient/Client.jsx";
import NguoiMua from "./layouts/NguoiDung/NguoiMua.jsx";
import NguoiBan from "./layouts/NguoiDung/NguoiBan.jsx";
import Tour from "./layouts/Tour/Tour.jsx";
import Revenue from "./layouts/Revenue/Revenue.jsx";
import Post from "./layouts/Post/Post.jsx";
import Partner from "layouts/DoiTac/Partner.jsx";
// import Test from "./test";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
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
                    {/* <Route path="tour">
                        <Route index element={<Test />} />
                    </Route> */}
                    <Route path="revenue" element={<Revenue />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
