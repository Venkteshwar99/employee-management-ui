import React from 'react';
import { useLocation } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../Search/Css/SearchResults.css'; // Import the CSS file for styling
const SearchResults = () => {
 const location = useLocation();
 const { state } = location || {};
 return (
<div>
<h2>Search Results</h2>
     {state && state.employeeDetails && Array.isArray(state.employeeDetails) && state.employeeDetails.length > 0 ? (
<TableContainer component={Paper}>
<Table className="custom-table"> {/* Apply custom-table class */}
<TableHead>
<TableRow>
<TableCell>ID</TableCell>
<TableCell>Name</TableCell>
<TableCell>Email</TableCell>
</TableRow>
</TableHead>
<TableBody>
             {state.employeeDetails.map(employee => (
<TableRow key={employee.empId}>
<TableCell>{employee.empId}</TableCell>
<TableCell>{employee.fullName}</TableCell>
<TableCell>{employee.email}</TableCell>
</TableRow>
             ))}
</TableBody>
</Table>
</TableContainer>
     ) : (
<div>No results found.</div>
     )}
</div>
 );
};
export default SearchResults;