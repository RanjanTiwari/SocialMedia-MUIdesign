import { AppBar, Toolbar, styled, Typography, InputBase, Avatar, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import BrowserNotSupported from "@mui/icons-material/BrowserNotSupported";
import { Box } from "@mui/system";
import Badge from '@mui/material/Badge';
import {Mail, MailIcon, Notifications} from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
      }
  }));

export default function Navbar() {

const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          RANJAN T
        </Typography>
        <BrowserNotSupported sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail/>
          </Badge>
          <Badge badgeContent={4} color="error">
           <Notifications/>
          </Badge>
          <Avatar 
          sx={{width:30, height:30}} 
          src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          onClick={e=>setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
        <Avatar 
        sx={{width:30, height:30}} 
        src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        
        />
        <Typography variant="span">
            Joe
        </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu  sx={{marginTop:5}}
        id="basic-menu"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
            vertical:"top",
            horizontal:"right",
        }}
        transformOrigin={{
            vertical:"top",
            horizontal:"right",
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
