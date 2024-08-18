import { Box, Typography } from '@mui/material'
import React from 'react'

const ProfileInfo = ({property, value}) => {
  return (
    <Box sx={{display:'flex', flexDirection:'row', gap: 2}}>
        <Typography variant='h6' fontSize={15} color='#383838'>{property}:</Typography>
        <Typography color='grey'>{value}</Typography>
    </Box>
  )
}

export default ProfileInfo