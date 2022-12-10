import React, { useState } from "react";
import "./SideBar.css";
import Logo from "../../imgs/logo.png";
import { dataSidebar } from "../../Data/dataSidebar";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars, UilMoon } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

const SideBar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  // console.log(window.innerWidth)

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">
            <img src={Logo} alt="" />
            <span>
              Tr<span>a</span>vel
            </span>
          </div>
        </Link>
        {/* menu */}
        <div className="menu">
          {dataSidebar.map((item, index) => {
            return (
              <div
                className="menuItem"
                style={{ marginLeft: 0 }}
                key={index}
                onClick={() => setSelected(index)}
              >
                <Link
                  to={item.route}
                  style={{ textDecoration: "none" }}
                  className="menuItem active"
                >
                  <item.icon />
                  <span>{item.heading}</span>
                </Link>
                {/* <span className='counter'>1</span> */}
              </div>
            );
          })}

          {/* <div className="menuItem" style={{ color: 'black' }}>
                        <UilMoon />
                    </div> */}

          <div
            className="menuItem"
            style={{ color: "black" }}
            
          >
            {/* <div onClick={localStorage.removeItem("userData")}> */}
                <UilSignOutAlt />
            {/* </div> */}
            
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
