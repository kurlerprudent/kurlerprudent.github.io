import React from 'react'
import { useMediaQuery } from '@mui/material'
import MenuBar from '../components/MenuBar'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


export const MobileMoneyPaymentPage = () => {
    const xs = useMediaQuery('(max-width:430px)')
  return (
    <>
        {xs ? <MenuBar/> : <> <Navbar/> <Sidebar/></>}
    </>
  )
}

