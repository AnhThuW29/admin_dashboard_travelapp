import "./App.css";
import { useContext, useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import MainDash from "./components/MainDash/MainDash";
import RightBar from "./components/RightSide/RightSide";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.css";

import Home from "./layouts/Home/Home.jsx";
import Client from "./layouts/CLient/Client.jsx";
import Single from "./layouts/Single/Single.jsx";
import Tour from "./layouts/Tour/Tour.jsx";
import Hotel from "./layouts/Hotel/Hotel.jsx";
import Revenue from "./layouts/Revenue/Revenue.jsx";
import Post from "./layouts/Post/Post.jsx";
import { DarkModeContext } from "context/darkModeContext";
import Partner from "layouts/DoiTac/Partner.jsx";

function App() {
    // const [darkMode] = useContext(DarkModeContext)

    return (
        // <div className={darkMode ? 'darkMode' : 'App'}>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="client">
                        <Route index element={<Client />} />
                        <Route path=":clientID" element={<Single />} />
                    </Route>
                    <Route path="partner">
                        <Route index element={<Partner />} />
                        <Route path=":partnerID" element={<Single />} />
                    </Route>
                    <Route path="tour">
                        <Route index element={<Tour />} />
                        <Route path=":postId" element={<Post />} />
                    </Route>
                    <Route path="hotel">
                        <Route index element={<Hotel />} />
                        <Route path=":postId" element={<Post />} />
                    </Route>
                    <Route path="revenue" element={<Revenue />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
