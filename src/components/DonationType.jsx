import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'







const DonationType = ({colord,donationType}) => {
  return (
    
    
    <Box sx={{width:{md:'90%',xs:'90%'}, height:{md:130,xs:70}, backgroundColor: colord, borderRadius:2, marginBottom:{xs:1, md:3}, display:'flex', justifyContent:'center',alignItems:'center', cursor:'pointer',forcedColorAdjust:'revert-layer',transition:'ease-in', transitionDuration:'0.4s', ':hover':{opacity:0.7}}}>
        <Typography sx={{fontSize:{md:28,xs:16}, fontWeight:'600', color:'white', textAlign:'center', textWrap:'wrap', transition:'ease-in', transitionDuration:'0.4s', ':hover':{fontSize:{md:33}}}}>{donationType}</Typography>
    </Box>

    
  )
}

export default DonationType