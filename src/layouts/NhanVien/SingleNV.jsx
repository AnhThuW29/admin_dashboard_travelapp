import { useParams } from "react-router-dom";

import "./SingleNV.css";
import SideBar from "../../components/sidebar/SideBar.jsx";
import axiosClient from "Data/client";
import { useEffect, useState } from "react";

const SingleNV = () => {
    let id = useParams();
    const [data, setData] = useState({ DiaChi: [] });

    useEffect(() => {
        const getUser = async (id) => {
            try {
                await axiosClient
                    .get(`/v1/nhanvien/getuser/${id}`)
                    .then((res) => {
                        console.log(res.data);
                        setData(res.data);
                    });
            } catch (error) {
                console.log("LOI", error);
            }
        };
        getUser(id.nhanvienID);
    }, []);

    return (
        <div className="App">
            <div className="AppBackground">
                <SideBar />
                <div className="single">
                    <div className="singleContainer">
                        <div className="top">
                            <div className="left">
                                <h1 className="title">Thông tin chi tiết</h1>

                                <div className="item">
                                    {/* <img
                                        src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                        alt=""
                                        className="itemImg"
                                    /> */}
                                    <div className="details">
                                        <h1 className="itemTitle"></h1>
                                        <div className="detailItem">
                                            <span className="itemKey">
                                                Họ và tên:
                                            </span>
                                            <span className="itemValue">
                                                {data?.HoTen}
                                            </span>
                                        </div>

                                        <div className="detailItem">
                                            <span className="itemKey">
                                                Ngày sinh:
                                            </span>
                                            <span className="itemValue">
                                                {data?.NgaySinh}
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">
                                                Giới tính:
                                            </span>
                                            <span className="itemValue">
                                                {data?.GioiTinh}
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">
                                                Email:
                                            </span>
                                            <span className="itemValue">
                                                {data?.Email}
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">
                                                Số điện thoại:
                                            </span>
                                            <span className="itemValue">
                                                {data?.SDT}
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">
                                                CMND/CCCD:
                                            </span>
                                            <span className="itemValue">
                                                {data?.CMND}
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">
                                                Tên địa chỉ:
                                            </span>
                                            <span className="itemValue">
                                                {data.DiaChi.length > 0 &&
                                                    data?.DiaChi[0].TenDiaChi}
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">
                                                Địa chỉ:
                                            </span>
                                            <span className="itemValue">
                                                {data.DiaChi.length > 0 &&
                                                    data?.DiaChi[0].ChiTiet}
                                            </span>
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

export default SingleNV;
