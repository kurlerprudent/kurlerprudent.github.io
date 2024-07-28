import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  
  Divider,
  
  ListItemButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../Images/cccLogo.png'





const Dashboard = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
  
    const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setDrawerOpen(open);
    };
  
    const list = () => (
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
       
      </div>
    );
  
    return (
      <div>
        <AppBar position="static" sx={{backgroundColor:'#356742'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <img src={logo} width={80}/>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{transition:'ease-in-out',transitionDuration:'3s'}}
        >
          <List sx={{width:300}}>
            <ListItem sx={{width:'100%'}}>
                <ListItemButton>
                    <Typography>Home</Typography>
                </ListItemButton>
            </ListItem>
            <Divider/>

            <ListItem>
                <ListItemButton>
                    <Typography>Home</Typography>
                </ListItemButton>
            </ListItem>
            <Divider/>

            <ListItem>
                <ListItemButton>
                    <Typography>Home</Typography>
                </ListItemButton>
            </ListItem>
            <Divider/>

            <ListItem>
                <ListItemButton>
                    <Typography>Home</Typography>
                </ListItemButton>
            </ListItem>
            <Divider/>
          </List>
        </Drawer>
      </div>
    );
  };
  
  export default Dashboard;
  