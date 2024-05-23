import * as React from "react";
import Box from "@mui/material/Box";
import "./roadmap.css";
import Grid from "@mui/material/Grid";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function Roadmap() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 90 });
  }, []);

  return (
    <div className="roadmain">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <div className="heading">ROADMAP</div>
          </Grid>
          <div className="first">
            <div data-aos="fade-left">
              {" "}
              <p className="no">20%</p>
            </div>
            <div data-aos="fade-right">
              <p className="firsttxt">
                Access our community spaces at Twitter(logo) and Discord(logo){" "}
              </p>
            </div>
          </div>

          <div className="first">
            <div data-aos="fade-left">
              {" "}
              <p className="no">40%</p>
            </div>
            <div data-aos="fade-right">
              <p className="firsttxt">
                Donation for preservation of marine ecology and life{" "}
              </p>
            </div>
          </div>

          <div className="first">
            <div data-aos="fade-left">
              {" "}
              <p className="no">60%</p>
            </div>
            <div data-aos="fade-right">
              <p className="firsttxt">
                {" "}
                we will unlock Legend Blobs and will be airdropped At
                fortuitously
              </p>
            </div>
          </div>

          <div className="first">
            <div data-aos="fade-left">
              {" "}
              <p className="no">80%</p>
            </div>
            <div data-aos="fade-right">
              <p className="firsttxt">
                All blob holders will be honored with wondrous surprises{" "}
              </p>
            </div>
          </div>

          <div className="first">
            <div data-aos="fade-left">
              {" "}
              <p className="no">100%</p>
            </div>
            <div data-aos="fade-right">
              <p className="firsttxt">
                {" "}
                Now we all are primed to conquer the seas and claim the hidden
                treasures that are in the deepest depth of the oceans. Welcome
                to the land of Trench (TOB){" "}
              </p>
            </div>
          </div>
        </Grid>
      </Box>
    </div>
  );
}

export default Roadmap;
