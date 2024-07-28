import React from 'react'
import DonationType from './DonationType'
import { Box } from '@mui/material'
import { purple ,teal,cyan,lime,orange,deepOrange,red, blueGrey,pink} from '@mui/material/colors'




const token = {
    color1: purple[400],
    color2: teal[400],
    color3: cyan[500],
    color4:lime[400],
    color5:orange[400],
    color6:deepOrange[400],
    color7:red[500],
    color8:pink[400],
    color9:blueGrey[400]
}

const DonationsContainer = () => {

  
  return (



    <Box sx={{width:{xs:'100%',md:'80%'}, height:{md:'95vh'}, marginTop:{xs:10, md:8}, marginLeft:{md:'18%',lg:'15%',xs:0},display:'flex',flexDirection:{md:'row'},justifyContent:'space-evenly', paddingLeft:{xs:1}, rowGap:5}}>
        <Box sx={{width:'100%'}}>
            <DonationType colord={token.color1} donationType='OFFERTORY'/>
            <DonationType colord={token.color2} donationType='TITHE'/>
            <DonationType colord={token.color3} donationType='SPL. OFFERTORY'/>
        </Box>
         <Box  sx={{width:'100%'}}>
            <DonationType colord={token.color4} donationType='LOVE OFFERING'/>
            <DonationType colord={token.color5} donationType='MEMBERSHIP DUES'/>
            <DonationType colord={token.color6} donationType='EVENTS'/>
         </Box>
        <Box  sx={{width:'100%'}}>
            <DonationType colord={token.color7} donationType='BENEVOLENCE FUNDS'/>
            <DonationType colord={token.color8} donationType='FUNDS FOR MINISTRY'/>
            <DonationType colord={token.color9} donationType='CHARITY CONTRIBUTIONS'/>
        </Box>
         
    </Box>
       
    
  )
}

export default DonationsContainer