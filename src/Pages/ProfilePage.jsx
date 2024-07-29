import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProfileBox from '../components/ProfileBox'
import {useMediaQuery} from '@mui/material'
import MenuBar from '../components/MenuBar'


const ProfilePage = () => {

  const xs = useMediaQuery('(max-width:430px)')
  return (
    <>
    
        {xs? <MenuBar/> : <><Navbar/> <Sidebar/></>}
        <ProfileBox name='Obed Sarkodie' position='Church Member'/>
        
    
    </>
  )
}

export default ProfilePage