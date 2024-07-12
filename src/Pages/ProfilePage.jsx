import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProfileBox from '../components/ProfileBox'

const ProfilePage = () => {
  return (
    <>
    <Box>
        <Navbar/>
        <Sidebar/>
        <ProfileBox name='Obed Sarkodie' position='Church Member'/>
    </Box>
    </>
  )
}

export default ProfilePage