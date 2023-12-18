import React from 'react';
import '../NavBar/NavBar.css'; // Add your CSS file
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { Home } from '@mui/icons-material';
const NavBar = () => {
 return (
<nav className="navbar">
<NavLink to="/" className="nav-link"><Home/>Home</NavLink>
<NavLink to="/employee-list" className="nav-link">Display All Employees</NavLink>
     {/* Add more navigation links as needed */}
</nav>
 );
};
export default NavBar;