import React from 'react'
import MenuBar from '../components/MenuBar'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useMediaQuery } from '@mui/material'

export const MobileMoneyPaymentPage = () => {

    const xs = useMediaQuery('(max-with:430px)')

  return (
    <>
    {xs ? <MenuBar/> : <> <Navbar/> <Sidebar/></>}

   
    </>
  )
}
