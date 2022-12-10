import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import axiosClient from "Data/client";

import "./Tour.css";
import SideBar from "../../components/sidebar/SideBar.jsx";
import { Link } from "react-router-dom";
import { URL_IMAGES } from "../../Data/URLgetData";

const Tour = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const userData = JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {
        const getPost = async () => {
            try {
                await axiosClient
                    .get("/v1/tour/getbyidchutour/" + userData.id)
                    .then((res) => {
                        setData(res.data);
                    });
            } catch (err) {
                setError(err);
            }
        };
        getPost();
    }, []);

    return (
        <div className="App">
            <div className="AppBackground">
                <SideBar />

                <div className="tour" style={{ overflow: "auto" }}>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl py-16 sm:pb-24 lg:max-w-none ">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Tour
                            </h2>
                            <Link to={"/tour/ThemTour"}>
                                <div className="addTour">
                                    <h2>Thêm tour mới</h2>
                                </div>
                            </Link>

                            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                                {data.map((item, index) => (
                                    <Link
                                        to={"/tour/" + item._id}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <div
                                            key={index}
                                            className="group relative"
                                        >
                                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                                <img
                                                    src={
                                                        URL_IMAGES +
                                                        item.HinhAnh
                                                    }
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <h3 className="mt-6 text-sm text-gray-500">
                                                <span className="absolute inset-0" />
                                                {item.TieuDe}
                                            </h3>
                                            <p className="text-base font-semibold text-gray-900 pMoTa">
                                                {item.MoTa}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="flex items-center justify-between border border-gray-500 rounded-lg px-4 py-2 sm:px-6 mt-3">
                                <div className="flex flex-1 justify-between sm:hidden">
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Previous
                                    </a>
                                    <a
                                        href="#"
                                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Next
                                    </a>
                                </div>
                                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing{" "}
                                            <span className="font-medium">
                                                1
                                            </span>{" "}
                                            to{" "}
                                            <span className="font-medium">
                                                10
                                            </span>{" "}
                                            of{" "}
                                            <span className="font-medium">
                                                97
                                            </span>{" "}
                                            results
                                        </p>
                                    </div>
                                    <div>
                                        <nav
                                            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                            aria-label="Pagination"
                                        >
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                            >
                                                <span className="sr-only">
                                                    Previous
                                                </span>
                                                <ChevronLeftIcon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            </a>
                                            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                                            <a
                                                href="#"
                                                aria-current="page"
                                                className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                                            >
                                                1
                                            </a>
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                            >
                                                2
                                            </a>
                                            <a
                                                href="#"
                                                className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                                            >
                                                3
                                            </a>
                                            <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                                                ...
                                            </span>
                                            <a
                                                href="#"
                                                className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                                            >
                                                8
                                            </a>
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                            >
                                                9
                                            </a>
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                            >
                                                10
                                            </a>
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                            >
                                                <span className="sr-only">
                                                    Next
                                                </span>
                                                <ChevronRightIcon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                <h2 className="text-2xl font-bold text-gray-900">
                    Collections
                </h2>
            </div>
        </div>
    </div>;
};

export default Tour;
