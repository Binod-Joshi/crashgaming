import React from "react";
import "./Home.css";
import ManualAutoFullDiv from "../dashboardcomponents/ManualAutoDiv";
import ChatsMybets from "../dashboardcomponents/ChatsMybets";
import Graph from "../../common/Graph";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{display:"flex",gap:"10px",flexDirection:"row"}}>
        <div>
          <ManualAutoFullDiv />
        </div>
        <div>
          <Graph />
        </div>
      </div>
      <div>
        <ChatsMybets />
      </div>
    </div>
  );
};

export default Home;
