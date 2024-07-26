import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';


import { Box } from '@mui/material'

const events = [
    {
        title:'Church service',
        date:'2024-07-21'
    },
    {
        title:'Meeting Today',
        start: new Date()
    },
    {
        title:'Camp meeting',
        date: '2024-07-25'
    },
    {
        title:'Metapfora Special service',
        date:'2024-07-18'
    }
]





const CalendarApp = () => {

 
  return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'70%',marginLeft:'17%', marginTop:'5%'}}>
       <h2> My Calendar</h2>
       <Box sx={{width:'100%'}}>

      
       <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
            start:'today, prev, next',
            center:'title',
            end:'dayGridMonth, dayGridWeek, dayGridDay',
            eventBackgroundColor:'blue'
        }}
        weekends={true}
        events={events}
        dateClick={(arg)=>{alert(arg.dateStr)}}
        
       />
        </Box >
    </Box>
  )
}

export default CalendarApp