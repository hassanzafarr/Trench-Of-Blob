import "./discordpage.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Discord from "../images/discord.png";

import Aos from "aos";
import {useEffect} from "react";
import "aos/dist/aos.css"



function Discordpage() {
  
  useEffect(()=>{
    Aos.init({duration:2000,
              offset:200})
  },[]);

  
  // const notify = () => toast("Connect Discord Account!");

  return (
    <div className="discordmain">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <div className="head"  data-aos="fade-right">
              <div className="text2">
                <p>
                  {" "}
                  <b>JOIN OUR DISCORD GROUP </b>
                  <br />
                  <br />
                  The TOB Community is a hub for Gamers from all walks of life,
                  join the discord to stay ontop of all news and announcements.
                  All news regarding the TOB’s drop will appear here first, do
                  not miss out!
                </p>
                <div className="linecont">
                  {" "}
                  <div className="undeline"></div>
                </div>

                <br />
                <Button className="discordbtn">
                  <span class="button_text">Discord</span>
                  <span class="button_icon">
                    {/* <img className="dislogo" src={Discord} alt={"Nothing"} /> */}
                  </span>
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Discordpage;