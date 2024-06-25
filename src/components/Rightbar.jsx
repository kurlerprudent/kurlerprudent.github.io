import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
   <Box flex={2} bgcolor="yellow" p={2} sx={{display:{xs:"none", sm:"block"}}}>
    Right bar
   </Box>
  )
}

export default Rightbar