import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box flex={1} bgcolor="blue" p={2} sx={{display:{xs:"none" , sm:"block"}}}>
        Side Bar
    </Box>
  )
}

export default Sidebar