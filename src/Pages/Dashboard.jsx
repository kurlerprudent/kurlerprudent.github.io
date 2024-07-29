import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import MenuBar from '../components/MenuBar'
import { useMediaQuery } from '@mui/material';
import DashboardContent from '../components/DashboardContent'

const Dashboard = () => {

  const xs = useMediaQuery('(max-width:430px)')

  return (
    <Box>
      
      {xs? <MenuBar/> : <><Navbar/> && <Sidebar/></>}
     <DashboardContent/>
    </Box>
  )
}

export default Dashboard