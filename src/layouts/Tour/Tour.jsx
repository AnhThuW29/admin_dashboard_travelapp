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
                await axiosClient.get("/tour-post/latest-posts").then((res) => {
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
                <div>
                    <h2 style={{ margin: "3rem" }}>Tour</h2>
                    <div className="tour ">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid
                                container
                                spacing={{ xs: 2, md: 3 }}
                                columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                                {data.map((item, index) => (
                                    <Grid item xs={2} sm={4} md={4} key={index}>
                                        <Item>
                                            <Card sx={{ maxWidth: 345 }}>
                                                <CardMedia
                                                    component="img"
                                                    alt="green iguana"
                                                    height="140"
                                                    image={item.thumbnail.url}
                                                />
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="div"
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                    >
                                                        {item.content}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small">
                                                        Share
                                                    </Button>
                                                    <Button size="small">
                                                        Xem thêm
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Item>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </div>
                </div>

                <RightSide />
            </div>
        </div>
    );
};

export default Tour;
