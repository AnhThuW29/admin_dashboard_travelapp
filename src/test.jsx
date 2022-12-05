import React, { useParams, useEffect } from "react";
import SideBar from "./components/sidebar/SideBar";
import RightSide from "./components/RightSide/RightSide.jsx";
import axiosClient from "./Data/client";

import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import "./test.css";
const product = {
    name: "Basic Tee 6-Pack",
    price: "$192",
    href: "#",
    breadcrumbs: [
        { id: 1, name: "Men", href: "#" },
        { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
        {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
        },
        {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
            alt: "Model wearing plain black basic tee.",
        },
        {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
            alt: "Model wearing plain gray basic tee.",
        },
        {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
            alt: "Model wearing plain white basic tee.",
        },
    ],
    colors: [
        { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
        { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
        { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
        { name: "XXS", inStock: false },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: true },
        { name: "2XL", inStock: true },
        { name: "3XL", inStock: true },
    ],
    description:
        "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorwa. Need to add an extra pop of color to your outfit? Our white tee has you covered. The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway. Need to add an extra pop of color to your outfit? Our white tee has you covered. The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway. Need to add an extra pop of color to your outfit? Our white tee has you coveredThe Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
    highlights: [
        "Hand cut and sewn locally",
        "Dyed with our proprietary colors",
        "Pre-washed & pre-shrunk",
        "Ultra-soft 100% cotton",
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Test = () => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

    // let id = useParams();
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const getUser = async (id) => {
    //         try {
    //             await axiosClient.get(`/v1/tour/getone/${id}`).then((res) => {
    //                 setData(res.data);
    //                 console.log(res.data);
    //             });
    //         } catch (error) {
    //             console.log("LOI", error);
    //         }
    //     };
    //     getUser(id.clientID);
    // }, []);

    return (
        <div className="App">
            <div className="AppBackground">
                <SideBar />
                <div className="abc">
                    <div className="pt-8 p-6 ">
                        {/* <nav aria-label="Breadcrumb">
                            <ol
                                role="list"
                                className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                            >
                                {product.breadcrumbs.map((breadcrumb) => (
                                    <li key={breadcrumb.id}>
                                        <div className="flex items-center">
                                            <a
                                                href={breadcrumb.href}
                                                className="mr-2 text-sm font-medium text-gray-900"
                                            >
                                                {breadcrumb.name}
                                            </a>
                                            <svg
                                                width={16}
                                                height={20}
                                                viewBox="0 0 16 20"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                className="h-5 w-4 text-gray-300"
                                            >
                                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                            </svg>
                                        </div>
                                    </li>
                                ))}
                                <li className="text-sm">
                                    <a
                                        href={product.href}
                                        aria-current="page"
                                        className="font-medium text-gray-500 hover:text-gray-600"
                                    >
                                        {product.name}
                                    </a>
                                </li>
                            </ol>
                        </nav> */}

                        {/* Image gallery */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                                <img
                                    src={product.images[0].src}
                                    alt={product.images[0].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div
                                className=" lg:col-span-1 lg:border-r
                                lg:border-gray-200 lg:pr-8 pl-3"
                            >
                                {/*  */}
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                    {product.name}
                                </h1>
                                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                                    <h3 className="sr-only">Description</h3>
                                    <div className="space-y-6">
                                        <p className="text-base text-gray-900">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Description and details */}
                        </div>
                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">
                                Highlights
                            </h3>

                            <div className="mt-4"></div>
                        </div>

                        {/* Product info */}
                        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                            <div className="mt-10">
                                <h2 className="text-md font-medium text-gray-600">
                                    Lịch trình
                                </h2>

                                <div className="mt-4">
                                    <p className="text-md text-gray-900">
                                        {product.details}
                                    </p>
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

export default Test;
