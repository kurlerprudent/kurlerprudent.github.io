import { Avatar, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import {CalendarToday, Cast, DarkMode, Handshake, Home, Settings, VolunteerActivism} from "@mui/icons-material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none" , sm:"block"},}}>
      <Box position="fixed" marginTop={7}>
         <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            </ListItem>
            

            
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarToday />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItemButton>
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
            <ListItemButton>
              <ListItemIcon>
                <VolunteerActivism />
              </ListItemIcon>
              <ListItemText primary="Donation" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            
            
            <ListItemButton>
              <ListItemIcon>
                <Cast />
              </ListItemIcon>
              <ListItemText primary="Live Stream" />
            </ListItemButton>
           
          </ListItem>

          

          <ListItem disablePadding>
          <Link to='calendar' style={{textDecoration:'none', color:'black'}}>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon/>
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
            </Link>
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