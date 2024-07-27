import React from 'react'
import Data from './ChurchData.json'
import { Box, Typography } from '@mui/material'
import './styles/Table.css'




const Table = () => {
  return (
    <Box sx={{width:{md:'70%',xs:'90%'} , marginLeft:{xs:3, md:25,lg:35},marginRight:{md:80,xs:12}, marginTop:10}}>

      <Typography variant='h4'color='primary'>
        Church Members
      </Typography>


    <Box sx={{overflowX:{xs:'scroll', height:{md:600,xs:100}, overflowY:'scroll'}}}>

   
      <div className='table'>

      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>POSITION</th>
            <th>CONTACT</th>
            <th>EMAIL</th>
            <th>BIRTHDAY</th>
          </tr>
        </thead>
    {Data.map((memberInfo)=>{
      return(
        <tbody>
        <tr>
          <td>{memberInfo.id}</td>
          <td>{memberInfo.first_name} {memberInfo.last_name}</td>
          <td>{memberInfo.position}</td>
          <td>{memberInfo.phone}</td>
          <td>{memberInfo.email}</td>
          <td>{memberInfo.date_of_birth}</td>
        </tr>
      </tbody>
      )
    })}
       
      </table>
      </div>
      </Box>
    </Box>
  )
}

export default Table