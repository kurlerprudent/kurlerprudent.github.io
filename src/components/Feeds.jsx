
import React from 'react';
import { Posts } from './Posts';
import { Box } from '@mui/material';
import she from "../Images/she.jpg"
import gal from "../Images/gal.jpg"
import mach from "../Images/mach.webp"

const Feeds = () => {
  return (
    <Box sx={{flex:4}}  p={2}  >
     <Posts imgName={she}/>
     <Posts imgName={gal}/>
     <Posts imgName={mach}/>
    </Box>
      
    
  )
}

export default Feeds