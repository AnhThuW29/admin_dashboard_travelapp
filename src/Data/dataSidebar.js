import {
    UilEstate,
    UilUsersAlt,
    UilUmbrella,
    UilHouseUser,
    UilWallet,
} from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

export const dataSidebar = [
    {
        route: "/",
        icon: UilEstate,
        heading: "Tổng quan",
    },
    // {
    //     route: "/nhanvien",
    //     icon: UilUsersAlt,
    //     heading: "Nhân viên",
    // },
    // {
    //     route: "/client",
    //     icon: UilUsersAlt,
    //     heading: "Khách hàng",
    // },
    // {
    //     route: "/partner",
    //     icon: UilUsersAlt,
    //     heading: "Đối tác",
    // },
    {
        route: "/tour",
        icon: UilUmbrella,
        heading: "Tour",
    },
    {
        route: "/revenue",
        icon: UilWallet,
        heading: "Doanh thu",
    },
];

export const dataCard = [
    {
        title: "Doanh thu 7 ngày qua",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: 20,
        png: UilUsersAlt,
        series: [
            {
                name: "Khách hàng",
                data: [20, 40, 60, 80, 100],
            },
        ],
    },
    // {
    //     title: "Đối tác",
    //     color: {
    //         backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
    //         boxShadow: "0px 10px 20px 0px #e0c6f5",
    //     },
    //     barValue: 70,
    //     value: 20,
    //     png: UilUsersAlt,
    //     series: [
    //         {
    //             name: "Đối tác",
    //             data: [20, 40, 60, 80, 100],
    //         },
    //     ],
    // },
    {
        title: "Doanh Thu Hôm nay",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 50%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 70,
        value: 20,
        png: UilUmbrella,
        series: [
            {
                name: "Tour hot nhất",
                data: [20, 40, 60, 80, 100],
            },
        ],
    },
];

// Recent Update Card Data
export const UpdatesData = [
    {
        img: img1,
        name: "Andrew Thomas",
        noti: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "James Bond",
        noti: "has received Samsung gadget for charging battery.",
        time: "30 minutes ago",
    },
    {
        img: img3,
        name: "Iron Man",
        noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
        time: "2 hours ago",
    },
];
