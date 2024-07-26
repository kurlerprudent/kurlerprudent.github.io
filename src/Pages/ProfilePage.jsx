import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProfileBox from '../components/ProfileBox'
import CalendarApp from '../components/CalendarApp'

const ProfilePage = () => {
  return (
    <>
    <Box>
        <Navbar/>
        <Sidebar/>
        <ProfileBox name='Obed Sarkodie' position='Church Member'/>
        <CalendarApp/>
    </Box>
    </>
  )
}

export default ProfilePage