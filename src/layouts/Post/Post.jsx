import React, { useState, useEffect } from "react";
import SideBar from "../../components/sidebar/SideBar.jsx";
import MainDash from "../../components/MainDash/MainDash.jsx";
import RightSide from "../../components/RightSide/RightSide.jsx";
import "./Post.css";
import axiosClient from "../../Data/client";

import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { useParams } from "react-router-dom";
import { URL_IMAGES } from "../../Data/URLgetData";
// const product = {
//     name: "Basic Tee 6-Pack",
//     price: "$192",
//     href: "#",
//     breadcrumbs: [
//         { id: 1, name: "Men", href: "#" },
//         { id: 2, name: "Clothing", href: "#" },
//     ],
//     images: [
//         {
//             src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
//             alt: "Two each of gray, white, and black shirts laying flat.",
//         },
//         {
//             src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
//             alt: "Model wearing plain black basic tee.",
//         },
//         {
//             src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
//             alt: "Model wearing plain gray basic tee.",
//         },
//         {
//             src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
//             alt: "Model wearing plain white basic tee.",
//         },
//     ],
//     colors: [
//         { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//         { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
//         { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
//     ],
//     sizes: [
//         { name: "XXS", inStock: false },
//         { name: "XS", inStock: true },
//         { name: "S", inStock: true },
//         { name: "M", inStock: true },
//         { name: "L", inStock: true },
//         { name: "XL", inStock: true },
//         { name: "2XL", inStock: true },
//         { name: "3XL", inStock: true },
//     ],
//     description:
//         'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//     highlights: [
//         "Hand cut and sewn locally",
//         "Dyed with our proprietary colors",
//         "Pre-washed & pre-shrunk",
//         "Ultra-soft 100% cotton",
//     ],
//     details:
//         'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// };
// const reviews = { href: "#", average: 4, totalCount: 117 };

// function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
// }

const Post = () => {
    let id = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const getUser = async (id) => {
            try {
                await axiosClient.get(`/v1/tour/getone/${id}`).then((res) => {
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
                        <h3
                            style={{
                                marginTop: "1rem",
                                marginBottom: "1rem",
                                fontWeight: "bold",
                                fontSize: "20px",
                            }}
                        >
                            Thông tin tour
                        </h3>
                        <div className="row-span-3 ">
                            <div className="bg-fixed hidden overflow-hidden rounded-lg lg:block">
                                <img
                                    src={URL_IMAGES + data.HinhAnh}
                                    className="h-full w-full object-cover object-center"
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
                <RightSide />
            </div>
        </div>
    );
};

export default Post;
