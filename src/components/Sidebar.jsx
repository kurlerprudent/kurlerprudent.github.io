import {  Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import {CalendarToday, Cast, DarkMode, Handshake, Home, Settings, VolunteerActivism} from "@mui/icons-material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { NavLink,Link } from 'react-router-dom';


const Sidebar = () => {

  
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none" , sm:"block"},}}>
      <Box position="fixed" marginTop={7}>
         <List>
          <ListItem disablePadding >
            <NavLink to='/dashboard' style={({isActive})=>({
               textDecoration: 'none',
               color: isActive ? 'white' : 'black',
               backgroundColor: isActive ? 'blue' : 'transparent',
               borderRadius:5 
            })}>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            </NavLink>
            </ListItem>
            

            
            <ListItem disablePadding>
            <NavLink to='/events' style={({isActive})=>({
               textDecoration: 'none',
               color: isActive ? 'white' : 'black',
               backgroundColor: isActive ? 'blue' : 'transparent'
            })}>
            <ListItemButton>
              <ListItemIcon>
                <CalendarToday />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItemButton>
            </NavLink>
            </ListItem>
            

            
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Handshake />
              </ListItemIcon>
              <ListItemText primary="Partnership" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
          <NavLink to='/donations' style={({isActive})=>({
               textDecoration: 'none',
               color: isActive ? 'white' : 'black',
               backgroundColor: isActive ? 'blue' : 'transparent'
            })}>
            <ListItemButton>
              <ListItemIcon>
                <VolunteerActivism />
              </ListItemIcon>
              <ListItemText primary="Donation" />
            </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem disablePadding>
            
          <NavLink to='/staff' style={({isActive})=>({
               textDecoration: 'none',
               color: isActive ? 'white' : 'black',
               backgroundColor: isActive ? 'blue' : 'transparent'
            })}>
            <ListItemButton>
              <ListItemIcon>
                <Cast />
              </ListItemIcon>
              <ListItemText primary="Live Stream" />
            </ListItemButton>
           </NavLink>
          </ListItem>

          

          <ListItem disablePadding>
          <NavLink to='/calendar' style={({isActive})=>({
               textDecoration: 'none',
               color: isActive ? 'white' : 'black',
               backgroundColor: isActive ? 'blue' : 'transparent'
            })}>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon/>
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
            </NavLink>
          </ListItem>


          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <Switch/>
            </ListItemButton>
          </ListItem>
          </List>
          </Box>
    </Box>
  )
}

export default Sidebar