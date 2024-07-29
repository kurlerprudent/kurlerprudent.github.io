import React from 'react'
import { useMediaQuery } from '@mui/material'
import {Button} from '@mui/material'
import { green } from '@mui/material/colors'
import { AddCircleOutline } from '@mui/icons-material'

const CheckinButton = () => {
    const xs = useMediaQuery('(max-width:430px)')
  return (
    <>
     {xs?            <Button variant='outlined' sx={{width:'10%', borderRadius:'10%', borderColor:green[700]}}><AddCircleOutline sx={{color:green   [400]}}/></Button>
                    :<Button variant='contained' sx={{backgroundColor:green[500], width:{md:'20%',xs:'30%'}}}>Check in</Button>
                   
                    
                    }
    </>
  )
}

export default CheckinButton