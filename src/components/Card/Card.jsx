import React, { useEffect, useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import axios from "axios";
const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <PercentCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

function PercentCard({ param, setExpanded }) {
  const Png = param.png;

  // const [doanhThuHomNay, setDoanhThuHomNay] = useState();
  // const userData = JSON.parse(localStorage.getItem("userData"));
  // const d = new Date();
  // const dateNow = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();

  // useEffect(() => {
  //   const get = async () => {
  //     await axios
  //       .post(
  //         "http://localhost:9000/v1/thongke/thongkeall/" +
  //           userData.id,
  //         { Ngay: dateNow }
  //       )
  //       .then((res) => {
  //         setDoanhThuHomNay(res.data.tkNow);
  //       })
  //       .catch((err) => {
  //         console.log("ERR: ", err);
  //       });
  //   };
  //   get();
  // });
  
  

  return (
    <motion.div
      className="percentCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span> {param.doanhthu} $</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2022-11-02T00:00:00.000Z",
          "2022-11-02T01:30:00.000Z",
          "2022-11-02T02:30:00.000Z",
          "2022-11-02T03:30:00.000Z",
          "2022-11-02T04:30:00.000Z",
          "2022-11-02T05:30:00.000Z",
          "2022-11-02T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      className="expandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div>
        <UilTimes onClick={setExpanded} />
      </div>

      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>24 giờ trước</span>
    </motion.div>
  );
}

export default Card;
