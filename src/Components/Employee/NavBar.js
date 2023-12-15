import React from 'react';
import '../Employee/NavBar.css'; // Add your CSS file
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
const NavBar = () => {
 return (
<nav className="navbar">
<NavLink to="/" className="nav-link">Home</NavLink>
<NavLink to="/employee-list" className="nav-link">Display All Employees</NavLink>
     {/* Add more navigation links as needed */}
</nav>
 );
};
export default NavBar;