import "./parallax.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import parallaximg from '../images/under.jpg'
// import Discord from '../images/discord.png'

function Parallax() {
    return (
    <div className="parallaxmain">


 <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2}>
         <Grid item xs={12} md={6}> 
             <div className="mintpanel">
                 <div className="head">
                 <p>
                 <b>MINT YOUR TOB NFT</b><br/>
                 <br/>10,000 Gamers available for minting at 0.20 ETH.
                 Presale: 15th Feburary 2022, 1pm EST (5000 Whitelisted NFTs)
                 Public Sale: 18th Feburary 2022, 1pm EST (5000 NFTs)<br/>
                 Total Supply: 10,100 / 10,100
                 </p>
                 </div>
             </div>
         </Grid>
         <Grid item xs={12} md={6}> 
             <div className="imgpanel">
             <div className="head"  >
         
         <img className="parallax" src={parallaximg}/>
         </div>
             </div>
         </Grid>
     </Grid>
  
      </Box>
      </div>
   
        );
    }

export default Parallax;