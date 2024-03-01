import React from 'react'
import {Box, Typography} from "@mui/material"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';


const Rightbar = () => {
  return (
    <Box  sx={{display:{xs:'none',sm:'block'}}} p={2} flex={2}>
      <Box position={'fixed'}>
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={4}>
  <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png" />
  <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png" />
  <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png" />
  <Avatar alt="Agnes Walker" src="https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png" />
  <Avatar alt="Trevor Henderson" src="https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png" />
</AvatarGroup>
        
      </Box>
    </Box>
  )
}

export default Rightbar