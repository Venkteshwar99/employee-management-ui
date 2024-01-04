import React, { useState } from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowDropDown } from '@mui/icons-material';
const StyledAppBar = styled(AppBar)`
background-color: #3498db; // Replace with your preferred color
max-height:50px;
box-shadow:none;
`;
const Navbar = () => {
 const [anchorEl, setAnchorEl] = useState(null);
 const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
   setAnchorEl(null);
 };
 return (
<StyledAppBar position="static">
<Toolbar>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         EMS
</Typography>
<Button color="inherit" component={Link} to="/">
         Home
</Button>
<Button
         color="inherit"
         aria-controls="create-menu"
         aria-haspopup="true"
         onClick={handleClick}
>
         Menu<ArrowDropDown/>
</Button>
<Menu
         id="create-menu"
         anchorEl={anchorEl}
         open={Boolean(anchorEl)}
         onClose={handleClose}
>
<MenuItem component={Link} to="/create" onClick={handleClose}>
           Create
</MenuItem>
<MenuItem component={Link} to="/employee-list" onClick={handleClose}>
           Fetch Employee's
</MenuItem>
</Menu>
</Toolbar>
</StyledAppBar>
 );
};
export default Navbar;