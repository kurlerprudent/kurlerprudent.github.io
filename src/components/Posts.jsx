import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReplyIcon from '@mui/icons-material/Reply';
import React from 'react'
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export const Posts = (props) => {
  return (
    <Card sx={{marginBottom:6, marginTop:10}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
          O
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Odette Sister Naa"
      subheader="September 14, 2016"
    />
    <CardMedia 
      component="img"
     
      height="20%"
      src={props.imgName}
      alt="Paella dish"
    />

    <CardContent>
      <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit veritatis accusamus accusantium repellendus molestiae dolor voluptas sequi ratione labore quis. Officiis quo pariatur molestiae necessitatibus nisi molestias at amet eveniet.
      </Typography>
    </CardContent>

    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
      </IconButton>
      <IconButton aria-label="share">
        <ReplyIcon />
      </IconButton>
       
    </CardActions>
    
  </Card>
  )
}
