import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import gather from '../Images/gather.jpg'
import cccLogo from '../Images/cccLogo.png'


const LandingPageHeroSection = () => {
  return (
    <Box sx={{display:'flex',alignItems:'center', justifyContent:'center'}}>
        <Box sx={{width:'60%', height:'100vh', backgroundColor:'transparent', }}>
            <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'space-between',height:'50%'}}>
                <Box sx={{paddingTop:10, paddingLeft:40, marginBottom:20}}>
                <img src={cccLogo}/>
               
                </Box>
                <Box marginBottom={10}>
                    <Typography variant='h3'textAlign='center' marginBottom={2}>Find hope, purpose,<br /> and belonging.</Typography>
                    <Typography variant='h5' component='p' textAlign='center'>A welcoming community for all</Typography>
                </Box>

                <Box paddingLeft='30%'>
                <Button variant="outlined" sx={{marginRight:2, width:150}}>Sign in</Button>
                <Button variant="contained" sx={{width:150}}>Register</Button>
                </Box>
            </Box>
        </Box>
        <Box sx={{display:{xs:'none',sm:'none',md:'flex'},width:'40%', height:'100vh'}}>
        <img src={gather} height='100%' width='100%'/>
        </Box>
    </Box>
  )
}

export default LandingPageHeroSection