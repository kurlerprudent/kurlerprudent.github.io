import { Box, Typography } from '@mui/material'
import React from 'react'
import { purple, teal, cyan,lime,orange,deepOrange,red } from '@mui/material/colors'
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';



const token = {
    color1: purple[400],
    color2: teal[400],
    color3: cyan[500],
    color4:lime[400],
    color5:orange[400],
    color6:deepOrange[400],
    color7:red[500]
}
const Tithe = 3567
const Offertory = 54673
const Total = Tithe + Offertory
const Visitors = 29
const Male = 256
const Female = 564
const TotalMembers = Male + Female

const StatsCard = ({}) => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:3}}>


    <Box sx={{display:'flex',width:'100%', flexDirection:{xs:'column',md:'row'}, gap:5}}>

        <Box sx={{borderRadius:2,width:{xs:'35vh', md:400},height:{xs:150, md:150}, display:'flex', justifyContent:'space-between', alignItems:'center', paddingX:2, backgroundColor: token.color2}}>
            <Box sx={{display:'flex', flexDirection:'column',gap:{md:2}}}>
                <Typography variant='h4'sx={{fontSize:{md:20}}} color='white' fontFamily='sans-serif'>
                    Tithe
                </Typography>
                <Typography color='white' variant='h5' sx={{fontSize:{md:18}, display:'flex', flexDirection:'row', gap:1}}>GH <Typography color='white' variant='h5'></Typography>{Tithe}</Typography>
            </Box>
            
            <Box><CardGiftcardOutlinedIcon fontSize='large' color=''/></Box>
        </Box>


        <Box sx={{borderRadius:2,width:{xs:'35vh', md:400},height:{xs:150, md:150}, display:'flex', justifyContent:'space-between', alignItems:'center', paddingX:2, backgroundColor: token.color1}}>
            <Box sx={{display:'flex', flexDirection:'column',gap:{md:2}}}>
                <Typography variant='h4' color='white' fontFamily='sans-serif' sx={{fontSize:{md:20}}}>
                    Offertory
                </Typography>
                <Typography color='white' variant='h5' sx={{fontSize:{md:20}, display:'flex', flexDirection:'row', gap:1}}>
                    GH <Typography color='white' variant='h5'>{Offertory}</Typography>
                </Typography>
            </Box>
        
            <Box><VolunteerActivismOutlinedIcon fontSize='large' color='primary'/></Box>
        </Box>


        <Box sx={{borderRadius:2,width:{xs:'35vh', md:400},height:{xs:150, md:150}, display:'flex', justifyContent:'space-between', alignItems:'center', paddingX:2, backgroundColor: token.color3}}>
            <Box sx={{display:'flex', flexDirection:'column',gap:{md:2}}}>
            <Typography variant='h4' color='white' fontFamily='sans-serif' sx={{fontSize:{md:20}}}>
                Total
            </Typography>
            
            <Typography color='white' variant='h5' sx={{fontSize:{md:20}, display:'flex', flexDirection:'row', gap:1}}>
                GH <Typography variant='h5'>{Total}</Typography>
            </Typography>
            </Box>
        
            <Box><SummarizeRoundedIcon fontSize='large' color='error'/></Box>
        </Box>

    </Box>    


<Box sx={{display:'flex',width:'100%', flexDirection:{xs:'column',md:'row'}, gap:5}}>

<Box sx={{borderRadius:2,width:{xs:'35vh', md:400},height:{xs:150, md:150}, display:'flex', justifyContent:'space-between', alignItems:'center', paddingX:2, backgroundColor: token.color4}}>
    <Box sx={{display:'flex', flexDirection:'column',gap:{md:2}}}>
        <Typography variant='h4'sx={{fontSize:{md:20}}} color='white' fontFamily='sans-serif'>
            Visitors
        </Typography>
        <Typography color='white' variant='h5'>{Tithe}</Typography>
    </Box>
    
    <Box><CardGiftcardOutlinedIcon fontSize='large' color=''/></Box>
</Box>


<Box sx={{borderRadius:2,width:{xs:'35vh', md:400},height:{xs:150, md:150}, display:'flex', justifyContent:'space-between', alignItems:'center', paddingX:2, backgroundColor: token.color5}}>
    <Box sx={{display:'flex', flexDirection:'column',gap:{md:2}}}>
        <Typography variant='h4'sx={{fontSize:{md:20}}} color='white' fontFamily='sans-serif'>
            Female
        </Typography>
        <Typography color='white' variant='h5'>{Female}</Typography>
    </Box>
    
    <Box><FemaleIcon fontSize='large' color='secondary'/></Box>
</Box>


<Box sx={{borderRadius:2,width:{xs:'35vh', md:400},height:{xs:150, md:150}, display:'flex', justifyContent:'space-between', alignItems:'center', paddingX:2, backgroundColor: token.color6}}>
    <Box sx={{display:'flex', flexDirection:'column',gap:{md:2}}}>
        <Typography variant='h4'sx={{fontSize:{md:20}}} color='white' fontFamily='sans-serif'>
            Male
        </Typography>
        <Typography color='white' variant='h5'>{Male}</Typography>
    </Box>
    
    <Box><MaleIcon fontSize='large' color='secondary'/></Box>
</Box>



</Box> 
<Box sx={{borderRadius:2,width:{xs:'35vh', md:400},height:{xs:150, md:150}, display:'flex', justifyContent:'space-between', alignItems:'center', paddingX:2, backgroundColor: token.color7}}>
    <Box sx={{display:'flex', flexDirection:'column',gap:{md:2}}}>
        <Typography variant='h4'sx={{fontSize:{md:20}}} color='white' fontFamily='sans-serif'>
            Total Members
        </Typography>
        <Typography color='white' variant='h5'>{TotalMembers}</Typography>
    </Box>
    
    <Box><GroupsRoundedIcon fontSize='large' color='Secondary'/></Box>
</Box>

</Box>
  )
}

export default StatsCard