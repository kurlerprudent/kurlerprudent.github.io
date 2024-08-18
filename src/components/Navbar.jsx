import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import {EventAvailable, Mail,  NotificationsNone} from "@mui/icons-material"
import img1 from "../Images/cccLogo.png"
import gal from "../Images/gal.jpg"
import { Link } from 'react-router-dom'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center"
})

const Tray = styled(Box)({
  width:"auto",
  display:"flex",
  gap:4
})

const Search = styled("div")({
  backgroundColor:"white",
  width:"40%",
  borderRadius:10,
  padding:"0 10px",
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly',
  alignItems:'center'
})

const UserBox = styled(Box)({
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  gap:5,
  alignItems:"center",
  
})




const Navbar = () => {



  
  const [open, setOpen] = useState(false)
  return (
    <Box>
      <AppBar position='fixed' sx={{backgroundColor:'#356742'}}>
        <StyledToolbar>
          <Box sx={{display:{xs:'none', md:'flex'}}}>
          <img src={img1} width="60%"/>
          </Box>
          <Box sx={{display:{xs:'flex',md:'none'}}}>
            <IconButton sx={{color:'white'}}>
                <MenuIcon/>
            </IconButton>
          </Box>
          

          <Search sx={{marginRight:{
            xs:"20px"
          }}}>

            <InputBase placeholder='Search...' sx={{width:'100%'}}/>
            <SearchOutlinedIcon color='secondary'/>
            </Search>


          <Tray sx={{display:{xs:"none", sm:"flex"}}}>
            <Badge badgeContent={3} color='error'>
            <NotificationsNone/>
            </Badge>
            <Badge badgeContent={8} color='error'>
            <EventAvailable/>
            </Badge>
          </Tray>
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
        
        </StyledToolbar>
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
        <MenuItem ><Link to='/profile' style={{textDecoration:'none', color:'black'}}>Profile</Link> </MenuItem>
        <MenuItem >My account</MenuItem>
        <Link to='/' style={{textDecoration:'none', color:'inherit'}}><MenuItem>Logout</MenuItem></Link>
      </Menu>
      </AppBar>
    </Box>
  )
}

export default Navbar