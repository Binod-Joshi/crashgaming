import React from 'react';
import { styled } from '@mui/material';
import { Drawer as MuiDrawer } from '@mui/material';
import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: "240px",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      }),
    },
  }));

const DrawerOfDashboard = ({ open, menuItems, location }) => {
    return (
      <Drawer variant="permanent" open={open} >
        <div style={{ width: "235px" }}>
          <Divider />
          <div className="navList">
            <List component="nav">
              {menuItems.map((item, index) => (
                <ListItemButton key={index} component={Link} to={item.to}>
                  <div
                    className={
                      location.pathname === item.to
                        ? "linkInnerPart active"
                        : "linkInnerPart"
                    }
                  >
                    <div
                      className="present"
                      style={{
                        background:
                          location.pathname === item.to ? "#2d60ff" : "none",
                      }}
                    ></div>
                    <ListItemIcon className="iconPart">
                      <img src={item.icon} alt="" style={{ width: '12px', height: '10px' }} />
                    </ListItemIcon>
                    <ListItemText
                      className="textAlignInLink"
                      primary={item.text}
                    />
                  </div>
                </ListItemButton>
              ))}
            </List>
          </div>
        </div>
      </Drawer>
    );
  };

export default DrawerOfDashboard