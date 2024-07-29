import React from 'react'

import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Table from '../components/Table'
import { useMediaQuery } from '@mui/material'
import MenuBar from '../components/MenuBar'
import Sidebar from '../components/Sidebar'


const StaffDashboard = () => {

  const xs = useMediaQuery('(max-width:430px)')
  return (  
    <>


    
    {xs? <MenuBar/> : <> <Navbar/><Sidebar/> </>}
    
    <Stats/>
    <Table/>
  
    </>
  )
}

export default StaffDashboard