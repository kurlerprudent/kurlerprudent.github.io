import React from 'react'
import { Box, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Feeds from "../components/Feeds";
import Rightbar from "../components/Rightbar";
import Navbar from "../components/Navbar"
import {useMediaQuery} from '@mui/material'
import MenuBar from '../components/MenuBar';


const EventsPage = () => {

  const xs = useMediaQuery('(max-width:430px)')
  return (
    <Box>
      {xs? <MenuBar/> : <> <Navbar/> <Sidebar/></>}
      <Stack sx={{width:{md:'70%',xs:'100%'}, marginLeft:{lg:'15%',md:'17%',xs:0}}}>
      <Feeds/>
      <Rightbar/>
      </Stack>
      
    </Box>
  )
}

export default EventsPage