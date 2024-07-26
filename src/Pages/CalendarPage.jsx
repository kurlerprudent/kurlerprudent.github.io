import React from 'react'
import CalendarApp from '../components/CalendarApp'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const CalendarPage = () => {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <CalendarApp/>
    </div>
  )
}

export default CalendarPage