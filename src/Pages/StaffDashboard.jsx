import React from 'react'
import StaffSideBar from '../components/StaffSideBar'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Table from '../components/Table'
import { useMediaQuery } from '@mui/material'
import MenuBar from '../components/MenuBar'


const StaffDashboard = () => {

  const xs = useMediaQuery('(max-width:430px)')
  return (
    <>


    
    {xs? <MenuBar/> : <> <Navbar/> <StaffSideBar/></>}
    
    <Stats/>
    <Table/>
  
    </>
  )
}

export default StaffDashboard