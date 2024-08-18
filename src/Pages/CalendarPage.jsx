import React from 'react'
import CalendarApp from '../components/CalendarApp'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useMediaQuery } from '@mui/material'
import MenuBar from '../components/MenuBar'

const CalendarPage = () => {

  const xs = useMediaQuery('(max-width:430px)')
  return (
    <div>
        {xs? <MenuBar/> : <><Navbar/> <Sidebar/></>}
        <CalendarApp/>
    </div>
  )
}

export default CalendarPage