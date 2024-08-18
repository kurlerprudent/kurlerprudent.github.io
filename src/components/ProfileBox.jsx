import * as React from 'react';
import { Avatar, Box, Button, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, styled, Switch, Typography } from '@mui/material';
import gal from '../Images/gal.jpg'
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import ProfileInfo from './ProfileInfo';
import Notifications from './Notifications';
import { grey } from '@mui/material/colors';

const PrifileBox = ({name, position}) => {

 


  return (
    <Box sx={{display:'flex', flexDirection:'column', gap:4,flexGrow: 1 ,marginLeft:{lg:'20%',xs:0,md:'20%'}, marginTop:{lg:'5%',xs:'20%',md:'5%'}, backgroundColor:grey[200], width:{lg:'70%',xs:'90%',md:"70%"}, height:{lg:600,md:500,xs:'100%'}, padding:{lg:3,xs:2}, borderRadius:{md:7}, marginBottom:20}}>

    
    <Box sx={{ display:'flex',justifyContent:'space-between', alignItems:'flex-start', flexDirection:{lg:'row',xs:'column',md:'row'}}}>
      <Box display='flex' gap={3} alignItems='center'>
      <Box width={70} height={70}>
        <Avatar src={gal} sx={{width:'100%', height:'100%'}}/>
      </Box>
      <Box>
        <Typography variant='h5' fontSize={20} fontWeight='700' color='#181818'>{name}</Typography>
        <Typography variant='h6' fontSize={16} component='p' color='#484848'>{position}</Typography>
      </Box>
      </Box>

      <Box>
        <Stack spacing={2} direction='row'>
        <Button variant="outlined" startIcon={<EmailIcon  color='primary'/>}>
          Message
        </Button>
        <Button variant="outlined" startIcon={<SettingsIcon />}>
        Settings
      </Button>
        </Stack>
        
      </Box>
      
  </Box>

    <Box sx={{display:'flex',flexDirection:{lg:'row',md:'row',xs:'column'},width:{lg:'100%',md:'80%',xs:'100%'}, height:200, justifyContent:'space-between'}}>

      <Box sx={{display:'flex', flexDirection:'column', gap:4, width:'100%'}}>
        <Container>
        <Typography variant='h6' fontSize={15} color='darkblue'>Platform Settings</Typography>
        </Container>
        <Container >
          <Typography variant='h6' fontSize={15} color='#393939'>Account</Typography>
          <Box>
          <Box>
          <List  sx={{marginLeft:-3}}>
          <ListItem disablePadding marginLeft = {0}>
            <ListItemButton disableRipple>
              <ListItemIcon>
                <Switch/>
              </ListItemIcon>
              <ListItemText secondary="Lorem ipsum dolor sit amet." />
            </ListItemButton>
            </ListItem>

            <ListItem disablePadding marginLeft = {0}>
            <ListItemButton disableRipple>
              <ListItemIcon>
                <Switch/>
              </ListItemIcon>
              <ListItemText secondary="Lorem ipsum dolor sit amet." />
            </ListItemButton>
            </ListItem>

            <ListItem disablePadding marginLeft = {0}>
            <ListItemButton disableRipple>
              <ListItemIcon>
                <Switch/>
              </ListItemIcon>
              <ListItemText secondary="Lorem ipsum dolor sit amet." />
            </ListItemButton>
            </ListItem>
            </List>
          </Box>
            
        
          </Box>
        </Container>
        
      </Box>
      <Box sx={{display:'flex', flexDirection:'column', gap:5}}>
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', gap:10}}>
          <Typography variant='h6' fontSize={15} color='darkblue'>Profile Information</Typography>
          <EditIcon color='secondary' fontSize='small'/>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
            <ProfileInfo property='Full Name' value='Obed Sarkodie'/>
            <ProfileInfo property='Mobile' value='(+233)245641772'/>
            <ProfileInfo property='Email' value='sarkodiekurler@gmail.com'/>
            <ProfileInfo property='Location' value='Legon, Accra'/>
            <ProfileInfo property='Church Group' value="Men's Fellowship"/>
        </Box>
      </Box>
    
      </Box>

  </Box>
  )
}

export default PrifileBox