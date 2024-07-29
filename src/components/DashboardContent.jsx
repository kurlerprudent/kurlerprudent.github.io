import { Box, Button, Divider, styled, Typography } from '@mui/material'
import React from 'react'
import { green, grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useMediaQuery} from '@mui/material';
import CheckinButton from './CheckinButton';



const StyledBox = styled(Box)({
    width:'80%',
    height:200,
    backgroundColor:'white',
    color:'black',
    borderRadius:10,
    marginLeft:'6%',
    padding:20,
    display:'flex',
    flexDirection:'column',
    gap:{md:10,xs:5}
    
})






const DashboardContent = () => {

    const xs = useMediaQuery('(max-width:430)')

  return (
    < >
    <Box sx={{width:{md:'70%',xs:'100%'}, backgroundColor: grey[200], height:'auto', marginLeft:{sm:27,md:30}, marginTop:{sm:8,xs:7}, display:'flex', flexDirection:'column',gap:6}}>

        <Box sx={{width:'100%', height:50, backgroundColor:'green', display:'felx', paddingY:3}}>
            <Typography variant='h4' sx={{color:'white', fontWeight:'500', textAlign:'center'}}>Welcome back, Bob!</Typography>
        </Box>

        <Box sx={{display:'flex', flexDirection:'column',gap:4}}>
            <StyledBox boxShadow={3}>
                <Box>
                <Typography variant='h5'>Upcoming Events</Typography>
                </Box>
                
                
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginBottom:2}}>
                    <Typography>Event Title - Date</Typography>
                   <CheckinButton/>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between' , marginBottom:2}}>
                    <Typography>Event Title - Date</Typography>
                    <CheckinButton/>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between' , marginBottom:2}}>
                    <Typography>Event Title - Date</Typography>
                    <CheckinButton/>
                </Box>
                </StyledBox>


            <StyledBox boxShadow={3} >
                <Typography variant='h5'>Recent Activities</Typography>
                
                <Box>
                    <Typography >Attended Event1</Typography>
                    <Typography >Joined Multitech group</Typography>
                    <Typography >Changed Profile picture</Typography>
                </Box>
            </StyledBox>
            <StyledBox boxShadow={3} >
                <Typography variant='h5'>Donations</Typography>

                <Box sx={{display:'flex', flexDirection:'column',gap:2}}>
                    <Link to='/donations' style={{textDecoration:'none', color:'inherit'}}><Button variant='contained' sx={{backgroundColor:green[400],width:'35%'}}>Make Donations</Button></Link>
                    <Typography variant='h6'>Donation History</Typography>
                    <Box>
                    <Typography>Payment made for GHS 100.00 to CCC. Reference: Tithe</Typography>
                    <Typography>Payment made for GHS 100.00 to CCC. Reference: Offertory</Typography>
                    <Typography>Payment made for GHS 100.00 to CCC. Reference: Charity</Typography>
                    </Box>
                    
                </Box>
                </StyledBox>


                <StyledBox>

                </StyledBox>
        </Box>

    </Box>
    </>
  )
}

export default DashboardContent