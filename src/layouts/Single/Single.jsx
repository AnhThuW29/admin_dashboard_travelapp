import "./Single.css";
import SideBar from "../../components/sidebar/SideBar.jsx";
// import Navbar from "../../components/navbar/Navbar";
import CustomerReview from "../../components/CustomerReview/CustomerReview";
import List from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
import { dataSidebar } from "Data/dataSidebar";
import axiosClient from "Data/client";
import { useEffect, useState } from "react";
import RightSide from "components/RightSide/RightSide";

const Single = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getUser = async (id) => {
            try {
                await axiosClient.get(`/user/${id}`).then((res) => {
                    setData(res.data._id);
                });
            } catch (error) {
                console.log("LOI", error);
            }
        };
        getUser();
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => res.json())
        //     .then((json) => setData(json));
    }, []);

    return (
        <div className="App">
            <div className="AppBackground">
                <SideBar />
                <div className="single">
                    <div className="singleContainer">
                        <div className="top">
                            <div className="left">
                                <div className="editButton">Edit</div>
                                <h1 className="title">Information</h1>
                                {data.map((item, index) => (
                                    <div className="item" key={index}>
                                        <img
                                            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                            alt=""
                                            className="itemImg"
                                        />
                                        <div className="details">
                                            <h1 className="itemTitle"></h1>
                                            <div className="detailItem">
                                                <span className="itemKey">
                                                    Email:
                                                </span>
                                                <span className="itemValue">
                                                    {item.email}
                                                </span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">
                                                    Phone:
                                                </span>
                                                <span className="itemValue">
                                                    {item.phone}
                                                </span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">
                                                    Address:
                                                </span>
                                                <span className="itemValue">
                                                    Elton St. 234 Garden Yd.
                                                    NewYork
                                                </span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">
                                                    Country:
                                                </span>
                                                <span className="itemValue">
                                                    USA
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* <div className="right">
                                <CustomerReview />
                                
                            </div> */}
                        </div>
                        <div className="bottom">
                            <h1 className="title">Last Transactions</h1>
                            <List />
                        </div>
                    </div>
                </div>
                <RightSide />
            </div>
        </div>
    );
};

export default Single;
