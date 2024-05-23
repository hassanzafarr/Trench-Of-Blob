import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import "./Drawer.css";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, ListItemButton, SwipeableDrawer } from "@mui/material";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "white",
  },
}));

const MenuItems = ["Home", "About", "Team", "Roadmap"];

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const mobileDrawer = (
    <Box
      onClick={handleDrawerToggle}
      style={{ textAlign: "center", overflowY: "auto" }}
      // sx={scrollbarStyles}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          // alignItems: "center",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          // sx={{ mr: 2 }}
        >
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>

      <List>
        {MenuItems.map((item, index) => (
          <ListItemButton key={index} sx={{ color: "#fff" }} onClick={() => setOpenDrawer(false)}>
            <ListItemText primary={item} sx={{ color: "#fff" }} />
          </ListItemButton>
        ))}
      </List>
      {/* <li  onClick={() => setOpenDrawer(false)}  className="links">Home</li>
              <Divider/>
              <li  onClick={() => setOpenDrawer(false)}  className="links">About </li>
              <Divider/>
              <li  onClick={() => setOpenDrawer(false)}  className="links">Team</li>
              <Divider/>
              <li  onClick={() => setOpenDrawer(false)}  className="links">Roadmap</li> */}
    </Box>
  );

  return (
    <>
      <SwipeableDrawer
        disableSwipeToOpen={false}
        swipeAreaWidth={10}
        sx={{
          "& .MuiDrawer-paper": {
            background: "red",
            boxShadow: "4px 0px 5px rgba(136, 136, 136, 0.5)",
            color: "#000",
            // width: { xs: 300, sm: 400 },
            width: "70%",
            // borderTopLeftRadius: "18px",
            // borderBottomLeftRadius: "18px",
            boxSizing: "border-box",
            overflow: "hidden",
            padding: 2,
          },
        }}
        anchor={"left"}
        open={openDrawer}
        onClose={handleDrawerToggle}
        onOpen={handleDrawerToggle}
      >
        {mobileDrawer}
      </SwipeableDrawer>
      {/* <Drawer className="draw"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}      
    >
      <div style={{ textAlign: 'right' }}>
        <IconButton onClick={() => setOpenDrawer(false)} className={classes.icon}>
          <CloseIcon />
        </IconButton>
      </div>
        <div className="drawernav" >
            <ul>
              <li  onClick={() => setOpenDrawer(false)}  className="links">Home</li>
              <Divider/>
              <li  onClick={() => setOpenDrawer(false)}  className="links">About </li>
              <Divider/>
              <li  onClick={() => setOpenDrawer(false)}  className="links">Team</li>
              <Divider/>
              <li  onClick={() => setOpenDrawer(false)}  className="links">Roadmap</li>
              <Divider/>
            </ul>
          </div>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon />
      </IconButton> */}
      {/* onClick={() => setOpenDrawer(false)} */}
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
