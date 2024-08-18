import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
   <Box flex={2} 
    p={2} 
    sx={{display:{xs:"none", sm:"block"}}}>
    <Box position="fixed" marginTop={10}>
    <Typography sx={{textAlign:"center"}}>
      People
    </Typography>

    <AvatarGroup max={5}>
      <Avatar alt="Remy Sharp" src="" />
      <Avatar alt="Travis Howard" src="" />
      <Avatar alt="Cindy Baker" src="" />
      <Avatar alt="Agnes Walker" src="" />
      <Avatar alt="Trevor Henderson" src="" />
      <Avatar alt="Trevor Henderson" src="" />
      <Avatar alt="Trevor Henderson" src="" />
      <Avatar alt="Trevor Henderson" src="" />
    </AvatarGroup>
    </Box>
   </Box>
  )
}

export default Rightbar