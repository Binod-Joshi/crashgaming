// import "./styles.css";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./Graph.css";
import { MdPeopleOutline } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import Tron from "../assets/tron.svg";
import Increase from "../assets/drawersicons/increase.svg";
import { TbPointFilled } from "react-icons/tb";

const data = [
  {
    name: "1s",
    uv: 0,
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: "2s",
    uv: 370,
    // pv: 1398,
    // amt: 2210,
  },
  {
    name: "3s",
    uv: 800,
    // pv: 9800,
    // amt: 2290,
  },
  {
    name: "4s",
    uv: 1400,
    // pv: 3908,
    // amt: 2000,
  },
  {
    name: "5s",
    uv: 2300,
    // pv: 4800,
    // amt: 2181,
  },
  {
    name: "5s",
    // uv: 2300,
    // pv: 4800,
    // amt: 2181,
  },
];

export default function Graph() {
  const [widthData, setWidthData] = useState(window.innerWidth);
  const [heightData, setHeightData] = useState(window.innerWidth);

  const data1 = [
    { person: "Hidden", profit: "333.34" },
    { person: "Hidden", profit: "333.34" },
    { person: "Hidden", profit: "333.34" },
    { person: "Hidden", profit: "333.34" },
  ];

  useEffect(() => {
    const deviceWidth = window.innerWidth;
    console.log(deviceWidth);
    if (deviceWidth <= 768) {
      setWidthData(200);
      setHeightData(200);
    } else if (deviceWidth <= 1024) {
      setWidthData(350);
      setHeightData(330);
    } else {
      setWidthData(650);
      setHeightData(450);
    }
  }, []);
  return (
    <div className="graphOuterDiv">
      <div className="topDivOfGraph">
        <p className="notClicked" style={{ width: "60px", height: "32px" }}>
          1.2x
        </p>
        <p className="notClicked" style={{ width: "60px" }}>
          3.3x
        </p>
        <p
          className="clickedone"
          style={{ width: "60px", height: "32px", backgroundColor: "#2DA37F" }}
        >
          {" "}
          4.4x
        </p>
        <p className="notClicked" style={{ width: "60px" }}>
          66.5X
        </p>
        <p
          className="clickedone"
          style={{ width: "60px", height: "32px", backgroundColor: "#2DA37F" }}
        >
          77.5x
        </p>
        <span className="notClicked" style={{ width: "60px" }}>
          <img src={Increase} alt="" />
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <AreaChart
          width={widthData}
          height={heightData}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          // className="areaChart"
        >
          {/* <CartesianGrid strokeDasharray="0 0 " /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#ffffff" fill="#EB7D2D" />
        </AreaChart>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "7px",
            }}
          >
            {data1.map((item, index) => (
              <div
                key={index}
                className="lastDivOfManualAuto2"
                style={{ borderRadius: "100px" }}
              >
                <p className="lastManualData">
                  <span>
                    <IoPerson />
                  </span>{" "}
                  <span className="lastManualData">{item.person}</span>
                </p>
                <p className="lastManualData">
                  <span>
                    <img src={Tron} alt="tron" />
                  </span>
                  <span className="lastManualData">{item.profit}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
