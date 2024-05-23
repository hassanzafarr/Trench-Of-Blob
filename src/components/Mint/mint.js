import * as React from "react";
import Box from "@mui/material/Box";
import bloby from "../images/19.png";
import fish1 from "../images/blob1.jpeg";
import fish2 from "../images/blob2.jpeg";
import fish3 from "../images/blob3.jpeg";
import Grid from "@mui/material/Grid";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import background from '../images/16922.jpg'

function Mint() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);

  return (
    <div className="showcasemain">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* <Parallax speed={-10}> */}
                <img src={background} width={'100%'} height={'60%'} />
            {/* </Parallax> */}
          </Grid>
          <Grid item xs={12} md={6} sx={{ background: "red" }}>
            <Box>
              <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                MINT YOUR TOB NFT
              </Typography>
              <Typography>
                10,000 gamers available for minting at 0.20 ETH. Presale: 15th
                FEB 2022, 1pm Publicsale: 18th FEB 2022, 1pm
              </Typography>
              <Typography>Total Supply: 10,100/10,100</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Mint;
