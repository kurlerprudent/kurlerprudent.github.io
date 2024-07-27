import React from 'react'
import StaffSideBar from '../components/StaffSideBar'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Table from '../components/Table'



const StaffDashboard = () => {
  return (
    <>


    
    <Navbar/>
    <StaffSideBar/>
    
    <Stats/>
    <Table/>
  
    </>
  )
}

export default StaffDashboard