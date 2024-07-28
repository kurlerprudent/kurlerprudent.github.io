import { Box, Typography } from '@mui/material'
import React from 'react'
import MasterCard from '../Images/mastercard.png'
import bank1 from '../Images/bank1.png'
import mob from '../Images/mob.png'


const PaymentType = () => {
  return (
    <Box boxShadow={3} borderColor='black' sx={{width:500, height:550, marginBottom:{md:10}, display:'flex',flexDirection:'column', alignItems:'center', padding:1, rowGap:3, borderRadius:3}}>
        <Box sx={{paddingY:2, marginTop:8, display:'flex'}}>
            <Typography sx={{fontSize:20, color:'darkorchid', fontWeight:'600'}}>Select a payment method</Typography>
        </Box>
        <Box boxShadow={3} sx={{ width:'80%', height:'20%',borderRadius:3, display:'flex', flexDirection:'row',columnGap:3, alignItems:'center', transition:'ease-in-out', transitionDuration:'0.6s',":hover":{borderWidth: 1, borderColor:'blue', cursor:'pointer', background:'lightgrey'}}}>
            <img src={mob} width='30%'height= '100%'/>
            <Typography variant='h6'>Mobile Money</Typography>
        </Box>
        <Box boxShadow={3}  sx={{ width:'80%', height:'20%',borderRadius:3,display:'flex', alignItems:'center',columnGap:3, transition:'ease-in-out', transitionDuration:'0.6s', ':hover':{borderWidth: 1, borderColor:'blue', cursor:'pointer', background:'lightgrey'}}}>
        <img src={bank1} width='30%'height= '100%'/>
        <Typography variant='h6'>Bank</Typography>
        </Box>
        <Box boxShadow={3}  sx={{ width:'80%', height:'20%', borderRadius:3, display:'flex', alignItems:'center',columnGap:3,transitionDuration:'0.6s', ':hover':{borderWidth: 1, borderColor:'blue', cursor:'pointer', background:'lightgrey'}}}>
        <img src={MasterCard} width='30%'height= '100%'/>
        <Typography variant='h6'>MasterCard</Typography>
        </Box>

    </Box>
  )
}

export default PaymentType