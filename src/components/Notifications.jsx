import { Avatar, Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const Notifications = () => {
  return (
   <Box>
     <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginTop:4, gap:3}}>
            <Avatar/>
            <Box>
            <Typography variant='h6' fontSize={15} color='indigo'lineHeight={1} >Sophia B</Typography>
            <Typography variant='h6' fontSize={13} fontWeight={300} >Lorem ipsum dolor sit.</Typography>
            </Box>
            
            <Button>...</Button>
          </Box>
   </Box>
  )
}

export default Notifications