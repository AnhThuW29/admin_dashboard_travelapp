import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { dataCard } from "../../Data/dataSidebar";
import "./Cards.css";
import axios from "axios";

const Cards = () => {
  const [doanhThu, setDoanhThu] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const d = new Date();
  const dateNow = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();

  useEffect(() => {
    const get = async () => {
      await axios
        .post(
          "http://localhost:9000/v1/thongke/thongkeall/" +
            userData.id,
          { Ngay: dateNow }
        )
        .then((res) => {
          setDoanhThu(res.data);
        })
        .catch((err) => {
          console.log("ERR: ", err);
        });
    };
    get();
  }, []);

  return (
    <div className="cards">
      {dataCard.map((card, id) => {
        return (
          <div key={id} className="container">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              doanhthu={doanhThu[id]}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
