import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from '../assets/drawersicons/home.svg';
import BackRoll from "../assets/drawersicons/bankroll.svg";
import BackTesting from "../assets/drawersicons/backtesting.svg"
import Stats from "../assets/drawersicons/stats.svg";
import LeaderBoard from "../assets/drawersicons/leaderboard.svg"
import Help from "../assets/drawersicons/help.svg"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./Dashboard.css";
import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { IoLibraryOutline } from "react-icons/io5";
import { TbFileTypeDoc } from "react-icons/tb";
import { TbBinaryTree2 } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { PiNotepadBold } from "react-icons/pi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import ListIcon from "@mui/icons-material/List";
import DrawerOfDashboard from "../common/DrawerOfDashboard";
import Home from "../pages/home/Home"
import { Calculate } from "@mui/icons-material";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { to: "/", text: "HOME", icon: HomeIcon },
    { to: "/bankroll", text: "BANKROLL", icon: BackRoll },
    { to: "/backtesting", text: "BACKTESTING", icon: BackTesting },
    { to: "/stats", text: "STATS", icon: Stats },
    {
      to: "/leaderboard",
      text: "LEADERBOARD",
      icon: LeaderBoard,
    },
    { to: "/help", text: "HELP", icon: Help },
  ];
  return (
    <>
      <Box sx={{ display: "flex",backgroundColor:"#1D1F23" }}>
        <CssBaseline />

        <DrawerOfDashboard
          open={open}
          menuItems={menuItems}
          location={location}
        />
        <Box component="main" sx={styles.boxStyled}>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/addStudent" element={<AddStudent />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;

const styles = {
  boxStyled: {
    backgroundColor: (theme) =>
      theme.palette.mode === "#1D1F23",
    flexGrow: 1,
    height: "calc(100vh - 70px)",
    overflow: "auto",
    width:"100vw"
  },
  toolBarStyled: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    px: [1],
  },
  drawerStyled: {
    display: "flex",
    width: "250px",
  },
  hideDrawer: {
    display: "flex",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
};