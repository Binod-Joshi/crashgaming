import React, { useState } from "react";
import "./ManualAutoFullDiv.css";
import Tron from "../../assets/tron.svg";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

const ManualAutoFullDiv = () => {
  const [selected, setSelected] = useState("manual");

  const handleManualOrAuto = (data) => {
    setSelected(data);
  };
  const data = [{ person: "Hidden", multiData: "1.4", profit: "333.34" },{ person: "Hidden", multiData: "1.4", profit: "333.34" }];
  return (
    <div className="manualAutoOuterDiv">
      <div className="manualAutoDiv">
        <div
          onClick={(e) => handleManualOrAuto("manual")}
          className={selected === "manual" ? "clickedone" : "notClicked"}
        >
          Manual
        </div>
        <div
          onClick={(e) => handleManualOrAuto("auto")}
          className={selected === "auto" ? "clickedone" : "notClicked"}
        >
          Auto
        </div>
      </div>
      <div className="belowClickedDiv">
        <p>Bet Amount</p>
        <p>$0.00</p>
      </div>
      <div className="firstInputDiv">
      <input
        type="text"
        // value={inputValue}
        // onChange={handleInputChange}
        placeholder="Enter text here"
        style={{
          backgroundImage: `url(${Tron})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 10px',
          padding: '10px 20px 10px 40px',
          border: 'none',
        }}
        className="firstInput"
      />
        <div className="firstInputSideData">
          <span>1/2</span>
          <span>|</span>
          <span>2x</span>
        </div>
      </div>
      <p className="belowClickedDiv">Cashout At</p>
      <div className="firstInputDiv">
        <input className="firstInput" type="text" />
        <div className="firstInputSideData">
          <span>
            <FaCaretDown />
          </span>
          <span>|</span>
          <span>
            <FaCaretUp />
          </span>
        </div>
      </div>
      <div className="belowClickedDiv">
        <p>Profit on Win</p>
        <p>$0.00</p>
      </div>
      <div className="firstInputDiv">
        <input className="firstInput" style={{
          width:"98%",
          backgroundImage: `url(${Tron})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 10px',
          padding: '10px 20px 10px 40px',
          border: 'none',
        }} type="text" />

      </div>
      <button className="betButton">BET</button>
      <div className="belowBetDiv">
        <div className="flexContainer">
          <p className="boldText textWhite">Target Profit:</p>
          <span className="boldText textGreen">2 TRX</span>
        </div>
        <div className="flexContainer">
          <p className="boldText textWhite">Win Chance:</p>
          <span className="boldText textGreen">89.7%</span>
        </div>
      </div>
      <div className="belowClickedDiv">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
            }}
          >
            {" "}
            <span
              style={{ fontSize: "18px", marginRight: "2px", marginTop: "3px" }}
            >
              <MdPeopleOutline />
            </span>
            125
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "2px",
          }}
        >
          <img src={Tron} alt="tron" />
          <p style={{ color: "#ffffff" }}>$0.450</p>
        </div>
      </div>
      <div className="lastDivOfManualAuto">
      {data.map((item, index) => (
        <div key={index} className="lastDivOfManualAuto1">
          <p className="lastManualData">
            <span>
              <IoPerson />
            </span>{" "}
            <span className="lastManualData">{item.person}</span>
          </p>
          <p className="lastManualData">{item.multiData}</p>
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
  );
};

export default ManualAutoFullDiv;
