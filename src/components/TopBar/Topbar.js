import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import IconButton from '@mui/material/IconButton';
import "./Topbar.css";


function Navbar() {
  // const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className="topp">
        <Typography variant="h5" className="logo" >
          Trench Of Blob          
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className="navlinks">
            <ul>
              <li className="link">Home</li>
              <li className="link">About </li>
              <li className="link">Team</li>
              <li className="link">Roadmap</li>
            </ul>
          </div>
          // <div className="navlinks">
          //   <Link to="/" className="link" >
          //     Home
          //   </Link>
          //   <Link to="/about"className="link">
          //     About
          //   </Link>
          //   <Link to="/contact" className="link" >
          //     Contact
          //   </Link>
          //   <Link to="/faq"className="link">
          //     FAQ
          //   </Link>
          // </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;