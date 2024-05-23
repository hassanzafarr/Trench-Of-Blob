import "./Homepage.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import * as React from "react"; 
import Box from "@mui/material/Box"; 
import Nft from "../images/blob8.png";
// import Nft from "../images/502.png";

import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { useNavigate } from "react-router-dom";

function Homepage() {

  useEffect(()=>{
    Aos.init({duration:2000,
              offset:200})
  },[]);

  
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleGoButtonClick = () => {
    // Scroll to Showcase page
    navigate('/showcase');
  };


  return (
    <div className="homemain">
      <div className="btton">
        <Button className="field" sx={{textTransform:'none'}} variant="contained">
          Connect Wallet
        </Button>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="head"  data-aos="fade-right">
              <p className="textmain">
                READY TO TAKE OVER THE METAVERSE AND THE NFT SPACE
                <strong> JOIN "TRENCH OF BLOB" </strong>
                Trench Of Blob is your ticket into the largest and fastest
                growing NFT Project
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="head">
              <div className="nftcontainer">
                <img className="nft1" src={Nft} width={'80%'} height={'80%'}  data-aos="fade-left" />
              </div>
            </div>
          </Grid>
          <Grid container justifyContent={"center"}  item xs={12} md={12}>
            <div className="mmm">
              {" "}
              <Button
                style={{ fontFamily: "initial", fontSize: "16px" }}
                className="deep"
                onClick={handleGoButtonClick} 
              >
                {" "}
                Dive Into The Deep Sea
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default Homepage;