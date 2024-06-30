import React from 'react'
import { Box, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Feeds from "../components/Feeds";
import Rightbar from "../components/Rightbar";
import Navbar from "../components/Navbar"

const MembershipDashboard = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between" >
      <Sidebar/>
      
      <Feeds/>
      
      
      
      <Rightbar/>
      </Stack>
      
    </Box>
  )
}

export default MembershipDashboard