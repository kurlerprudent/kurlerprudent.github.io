import { Box } from '@mui/material'
import React from 'react'
import StatsCard from './StatsCard'



const Stats = () => {
  return (
   <Box sx={{width:'70%',marginTop:{xs:'20%', md:'5%'}, marginLeft:{xs:'10%',md:'18%'}}}>
    <StatsCard/>
    
   </Box>
  )
}

export default Stats