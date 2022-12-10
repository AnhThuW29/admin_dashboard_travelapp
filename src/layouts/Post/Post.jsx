import React, { useState, useEffect } from "react";
import SideBar from "../../components/sidebar/SideBar.jsx";
import "./Post.css";
import axiosClient from "../../Data/client";

import { Link, useParams } from "react-router-dom";
import { URL_IMAGES } from "../../Data/URLgetData";

const Post = () => {
    let id = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const getUser = async (id) => {
            try {
                await axiosClient.get("/v1/tour/getone/" + id).then((res) => {
                    setData(res.data);
                    console.log(res.data);
                });
            } catch (error) {
                console.log("LOI", error);
            }
        };
        getUser(id.postId);
    }, []);

    return (
        <div className="App">
            <div className="AppBackground">
                <SideBar />
                <div className="abc">
                    <div className="pt-8 p-6 ">
                        <h1
                            style={{
                                marginTop: "1rem",
                                marginBottom: "1rem",
                                fontWeight: "bold",
                                fontSize: "30px",
                            }}
                        >
                            Thông tin tour
                        </h1>
                        <div>
                            <Link to={"/tour/update" + data._id}>
                                <h3
                                    style={{
                                        marginTop: "1rem",
                                        marginBottom: "1rem",
                                        fontWeight: "bold",
                                        //   fontSize: "20px",
                                    }}
                                >
                                    Chỉnh sửa tour
                                </h3>
                            </Link>
                        </div>
                        <div className="row-span-3 ">
                            <div className="m-auto bg-center hidden overflow-hidden rounded-lg lg:block">
                                <img
                                    src={URL_IMAGES + data.HinhAnh}
                                    className=" object-cover"
                                />
                            </div>
                            <div className=" lg:col-span-1 lg:border-r lg:border-gray-200 lg:pr-8 pt-4">
                                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center font-['Open_Sans']">
                                    {data.TieuDe}
                                </h1>

                                <h3 className="text-lg italic tracking-tight text-gray-900 sm:text-lg pt-3">
                                    {data.DiaDiem}
                                </h3>
                                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                                    <h2 className="text-lg font-bold tracking-tight text-gray-600 pb-2">
                                        Thông tin liên hệ:
                                    </h2>
                                    <div className="space-y-6">
                                        <p className="text-base text-gray-900">
                                            <h3 className="italic text-gray-600">
                                                Hướng dẫn viên:
                                                <span className="text-gray-900">
                                                    {data.NguoiHuongDan}
                                                </span>
                                            </h3>
                                        </p>
                                        <p className="text-base text-gray-900">
                                            <h3 className="italic text-gray-600">
                                                Email:
                                                <span className="text-gray-900">
                                                    {data.email}
                                                </span>
                                            </h3>
                                        </p>
                                        <p className="text-base text-gray-900">
                                            <h3 className="italic text-gray-600">
                                                Số điện thoại:
                                                <span className="text-gray-900">
                                                    {data.SDT}
                                                </span>
                                            </h3>
                                        </p>
                                    </div>
                                    <h2 className=" mt-10 text-lg font-bold tracking-tight text-gray-600 pb-2">
                                        Giới thiệu
                                    </h2>
                                    <div className="space-y-5">
                                        <p className="text-base text-gray-900">
                                            {data.MoTa}
                                        </p>
                                    </div>
                                    <div className="mt-10">
                                        <h2 className="text-lg font-bold tracking-tight text-gray-600 pb-2">
                                            Lịch trình
                                        </h2>

                                        <div className="space-y-6">
                                            <p className="text-base text-gray-900">
                                                {data.LichTrinh}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
