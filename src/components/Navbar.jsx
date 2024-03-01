import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled,Box,InputBase } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import {theme} from "../theme"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
  backgroundColor:'white',
  padding:'0 10px',
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}))

const Icons = styled(Box)(({theme})=>({
  display:'none',
  alignItems:"center",
  gap:'20px',
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }

}))

const UserBox = styled(Box)(({theme})=>({
  display:'flex',
  alignItems:"center",
  gap:'10px',
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))

const Navbar = () => {
  const [open,setopen]=useState(false)

  return (
    <AppBar position='static' color="primary">
      <StyledToolbar >
        <Typography variant="h6" color="white" sx={{display:{xs:'none',sm:"block"}}}>
          Navbar
        </Typography>
      <AcUnitIcon sx={{display:{xs:'block',sm:"none"}}}/>
      <Search><InputBase placeholder='Search..'/></Search>
      <Icons>
      <Badge badgeContent={4} color="error">
      <MailIcon  />
      </Badge>

      <Badge badgeContent={4} color="error">
      <CircleNotificationsIcon  />
      </Badge>

      <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png"
      onClick={e=>setopen(true)}
      />


      </Icons>

      <UserBox>
      <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png"
      onClick={e=>setopen(true)}
      />
      </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar