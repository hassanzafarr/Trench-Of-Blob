import "./team.css";
import * as React from "react";
// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Nft from "../images/blob4.png";
import Nft1 from "../images/blob5.png";
import Nft2 from "../images/blob6.png";
import Nft3 from "../images/blob7.png";
import { Typography } from "@mui/material";

function Team() {
  return (
    <div className="teammain">
        <Grid container spacing={2} sx={{overflow:'hidden'}}>
          <Grid container justifyContent={"center"} item xs={12} md={12}>
            <div className="teamhead">Team Members</div>
          </Grid>

          <Grid item xs={12} md={6} lg={3} data-aos="fade-left"  sx={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
            <img className="nfts" src={Nft}  />
            <Typography sx={{fontSize:30}} >Founder</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3} data-aos="fade-down"  sx={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
            <img className="nfts" src={Nft1} />
            <Typography sx={{fontSize:30}} >Co Founder</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3} data-aos="fade-up"  sx={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
            <img className="nfts" src={Nft2} />
            <Typography sx={{fontSize:30}} >Designer</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3} data-aos="fade-right"  sx={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
            <img className="nfts" src={Nft3} />
            <Typography sx={{fontSize:30}} >Developer</Typography>
          </Grid>

          {/* <Grid item xs={12} md={6} lg={3}  >
            <div className="nftimg" data-aos="fade-left"  >
              <img className="nfts" src={Nft} />
              <div className="nftname">Founder</div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}  >
            <div className="nftimg" data-aos="fade-bottom"  >
              <img className="nfts" src={Nft3} />
              <div className="nftname">Co Founder</div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}  >
            <div className="nftimg" data-aos="fade-top" >
              <img className="nfts" src={Nft1} />
              <div className="nftname">Developer</div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}  >
            <div className="nftimg" data-aos="fade-right" >
              <img className="nfts" src={Nft2} />
              <div className="nftname">Designer</div>
            </div>
          </Grid> */}
        </Grid>
    </div>
  );
}
export default Team;
