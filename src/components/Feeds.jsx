
import React from 'react';
import { Posts } from './Posts';
import { Box } from '@mui/material';

const Feeds = () => {
  return (
    <Box sx={{flex:4 , marginTop:10}}  p={2}  >
     <Posts/>
     <Posts/>
     <Posts/>
    </Box>
      
    
  )
}

export default Feeds