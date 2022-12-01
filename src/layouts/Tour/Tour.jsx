import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";

import axiosClient from "Data/client";

import "./Tour.css";
import SideBar from "../../components/sidebar/SideBar.jsx";
import RightSide from "../../components/RightSide/RightSide.jsx";
import PostCard from "../../components/PostCard/PostCard.jsx";
import image from "../../imgs/Bear.jpg";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fcd2ce",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const Tour = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            try {
                await axiosClient.get("/v1/tour/getall").then((res) => {
                    setData(res.data);
                });
            } catch (err) {
                setError(err);
            }
        };
        getPost();
    }, []);

    const callouts = [
        {
            name: "Desk and Office",
            description: "Work from home accessories",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
            imageAlt:
                "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
            href: "#",
        },
        {
            name: "Self-Improvement",
            description: "Journals and note-taking",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
            imageAlt:
                "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
            href: "#",
        },
        {
            name: "Travel",
            description: "Daily commute essentials",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
            imageAlt:
                "Collection of four insulated travel bottles on wooden shelf.",
            href: "#",
        },
    ];

    return (
        //     <div className="App">
        //         <div className="AppBackground">
        //             <SideBar />
        //             <div>
        //                 <h2 style={{ margin: "3rem" }}>Tour</h2>
        //                 {/* <div className="tour ">
        //                     <Box sx={{ flexGrow: 1 }}>
        //                         <Grid
        //                             container
        //                             spacing={{ xs: 2, md: 3 }}
        //                             columns={{ xs: 4, sm: 8, md: 12 }}
        //                         >
        //                             {data.map((item, index) => (
        //                                 <Grid item xs={2} sm={4} md={4} key={index}>
        //                                     <Item>
        //                                         <Card sx={{ maxWidth: 345 }}>
        //                                             <CardMedia
        //                                                 component="img"
        //                                                 alt="green iguana"
        //                                                 height="140"
        //                                                 // image={item.thumbnail.url}
        //                                                 image={image}
        //                                             />
        //                                             <CardContent>
        //                                                 <Typography
        //                                                     gutterBottom
        //                                                     variant="h5"
        //                                                     component="div"
        //                                                 >
        //                                                     {item.TieuDe}
        //                                                 </Typography>
        //                                                 <Typography
        //                                                     variant="body2"
        //                                                     color="text.secondary"
        //                                                     className="line-lamp-3"
        //                                                 >
        //                                                     {item.MoTa}
        //                                                 </Typography>
        //                                             </CardContent>
        //                                             <CardActions>
        //                                                 <Button size="small">
        //                                                     Share
        //                                                 </Button>
        //                                                 <Button size="small">
        //                                                     Xem thêm
        //                                                 </Button>
        //                                             </CardActions>
        //                                         </Card>
        //                                     </Item>
        //                                 </Grid>
        //                             ))}
        //                         </Grid>
        //                     </Box>
        //                 </div> */}
        //             </div>
        //             <RightSide />
        //         </div>
        //     </div>
        // );
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Collections
                    </h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">
                                    {callout.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tour;
