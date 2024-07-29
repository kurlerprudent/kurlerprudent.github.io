import React, { useState } from 'react'
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography,Switch, AppBar, Toolbar, Badge, Avatar, styled, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { CalendarMonth, CalendarMonthOutlined, CalendarToday, Cast, DarkMode, Handshake, Home, Settings, VolunteerActivism } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import logo from '../Images/cccLogo.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import gal from '../Images/gal.jpg'

const MenuBar = () => {
    const [open, setOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = ()=>{
        setIsOpen(true)
    }
    const closeMenu = ()=>{
        setIsOpen(false)
    }


    const UserBox = styled(Box)({
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        gap:5,
        alignItems:"center",
        
      })
      

  return (
    <Box>

        <AppBar>
            <Toolbar sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <IconButton size='large' onClick={handleClick} sx={{width:'20%'}}>
            <MenuIcon/>
            </IconButton> 
            <Box width='30%' height='50%' marginRight={3}>
                <img src={logo} alt="Church logo" width='100%' height={40} />
            </Box>
            <Box >
            <Badge badgeContent={4} color='error'>
                
                    <CalendarMonth/>
                
            </Badge>

            <Badge badgeContent={7} color='error'>
               
                    <NotificationsIcon/>
               
            </Badge>
            </Box >
           
            
            <Box>

            <Avatar 
                src={gal}
                onClick={e=>{setOpen(true)}}
                sx={{display:{xs:"none", sm:"flex"}}} />
                <UserBox
                onClick={e=>setOpen(true)}
                sx={{display:{
                    xs:"flex", sm:"none"
                }}}>
                <Avatar sx={{width:30, height:30}}/>
                <Typography>
                    Obed
                </Typography>
                </UserBox>


            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                onClose={e=>setOpen(false)}
                open={open}
                
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem><Link to='/profile' style={{textDecoration:'none', color:'black'}}>Profile</Link> </MenuItem>
                <MenuItem >My account</MenuItem>
                <Link to='/' style={{textDecoration:'none', color:'inherit'}}><MenuItem>Logout</MenuItem></Link>
            </Menu>
            </Box>
            </Toolbar>
         
        </AppBar>

        <Drawer anchor='left' open={isOpen} onClose={setIsOpen}>
            <Stack width={200} p={2 } sx={{display:'flex', flexDirection:'column'}}>
                <Typography p={2} variant='h4' color='secondary' textAlign='center'>Menu</Typography>
                <Divider/>
                <Box>
                    <List width='100%'>
                                    <ListItem disablePadding >
                            <Link to='/dashboard' style={{textDecoration:'none', color:'black'}}>
                            <ListItemButton>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                            </ListItemButton>
                            </Link>
                            </ListItem>
                            

                            
                            <ListItem disablePadding>
                            <Link to='/events' style={{textDecoration:'none', color:'black'}}>
                            <ListItemButton>
                            <ListItemIcon>
                                <CalendarToday />
                            </ListItemIcon>
                            <ListItemText primary="Events" />
                            </ListItemButton>
                            </Link>
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
                        <Link to='/donations' style={{textDecoration:'none', color:'black'}}>
                            <ListItemButton>
                            <ListItemIcon>
                                <VolunteerActivism />
                            </ListItemIcon>
                            <ListItemText primary="Donation" />
                            </ListItemButton>
                            </Link>
                        </ListItem>

                        <ListItem disablePadding>
                            
                        <Link to='/staff' style={{textDecoration:'none', color:'black'}}>
                            <ListItemButton>
                            <ListItemIcon>
                                <Cast />
                            </ListItemIcon>
                            <ListItemText primary="Live Stream" />
                            </ListItemButton>
                        </Link>
                        </ListItem>

                        

                        <ListItem disablePadding>
                        <Link to='/calendar' style={{textDecoration:'none', color:'black'}}>
                            <ListItemButton>
                            <ListItemIcon>
                                <CalendarMonthOutlined/>
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

                <Box sx={{width:70, height:70, borderWidth:1, borderColor:'black', borderRadius:3, position:'absolute', right:-25, top:5}}>
                    <IconButton onClick={closeMenu}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
            </Stack>
        </Drawer>
        
    </Box>
  )
}

export default MenuBar