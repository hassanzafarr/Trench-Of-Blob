import * as React from "react";
import Box from "@mui/material/Box";
import "./showcase.css";
import bloby from "../images/19.png";
import fish1 from "../images/blob1.jpeg";
import fish2 from "../images/blob2.jpeg";
import fish3 from "../images/blob3.jpeg";
import Grid from "@mui/material/Grid";



import Aos from "aos";
import {useEffect} from "react";
import "aos/dist/aos.css"



function Showcase() {

  useEffect(()=>{
    Aos.init({duration:2000,
              offset:200})
  },[]);


  return (
    <div className="showcasemain">
      {/* <Box sx={{ flexGrow: 1 }}> */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="headco" data-aos="fade-right">
              <div className="text2">
                <p>
                  <b>About Trench Of Blob!</b>
                  <br />
                  <br />
                  Trench of blob is a rarest of collections of marine life art
                  in NFT. Recently discovered at the turn of the century, TOB
                  offer a very exclusive insight into the incredible and
                  awe-inspiring marvels found at the most secluded depths of the
                  seas.
                </p>
                <div className="slinecont">
                  {" "}
                  <div className="sundeline"></div>
                </div>

                <br />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sx={{overflow:'hidden'}}>
            <div className="headcontwo">
              <div className="imagecont">
                <img className="blobyy" src={fish1} data-aos="fade-right" />
                <img className="blobyy" src={fish2} data-aos="fade-up" />
                <img className="blobyy" src={fish3} data-aos="fade-left" />
              </div>
            </div>
          </Grid>
        </Grid>
      {/* </Box> */}
    </div>
  );
}

export default Showcase;