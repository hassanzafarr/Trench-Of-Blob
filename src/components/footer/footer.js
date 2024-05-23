import { Typography } from "@mui/material";
import "./footer.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as React from 'react';


function Footer() {


    return (
      <Grid container spacing={2}>
        <Grid xs={12} sx={{background:'#091E3A', padding:1}}>
          <Box sx={{textAlign:'center'}}>
            <Typography> © 2022 TRENCH OF BLOB. ALL RIGHTS RESERVED </Typography>
          </Box>
        </Grid>
      </Grid>
        // <div className="footermain">
        //     <Box sx={{ flexGrow: 1, bgcolor:'#091E3A' }}>
        //         <Grid container spacing={2}>
        //             <Grid  container justifyContent={'center'} item xs={12} md={5}>
        //                 <div className="footerleft">
        //                   <p className="foot">  © 2022 TRENCH OF BLOB. ALL RIGHTS RESERVED</p>
        //                     </div>
        //                     </Grid>
        //                     <Grid  container justifyContent={'center'} item xs={12} md={3}>
        //                 <div className="footermid">
        //                   <p className="foot"> Twitter Discord</p>
        //                     </div>
        //                     </Grid>
        //                     <Grid  container justifyContent={'center'} item xs={12} md={4}>
        //                 <div className="footerright">
        //                   <p className="foot">TERMS nd CONDTIONS </p>
        //                     </div>
        //                     </Grid>
       
        //         </Grid>
        //         </Box>
        // </div>
    );
}
export default Footer;