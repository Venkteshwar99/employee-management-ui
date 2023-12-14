import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import './EmployeeDetailsPage.css'; // Add your CSS file
const EmployeeDetailsPage = ({ match }) => {
 const [employee, setEmployee] = useState(null);
 const employeeId = match.params.employeeId;
 useEffect(() => {
   // Fetch the details for the specific employee
   axios.get(`http://localhost:8081/api/getActiveEmp/${employeeId}`)
     .then(response => setEmployee(response.data))
     .catch(error => console.error('Error fetching employee details:', error));
 }, [employeeId]);
 if (!employee) {
   return <div>Loading...</div>;
 }
 return (
<Card>
<CardContent className="employee-details-content">
<Grid container spacing={2}>
<Grid item xs={12} sm={6} md={6} lg={6} className="photo-container">
<CardMedia
             component="img"
             alt={employee.empName}
             className="card-media"
             image={`http://localhost:8081/api/photo/${employee.empId}`}
           />
</Grid>
<Grid item xs={12} sm={6} md={6} lg={6}>
<Typography variant="h6" component="div">
            {employee.fullName} 
</Typography>
<hr className="divider" />

<Typography  color="textSecondary">
         ID:  {employee.empId}
</Typography>
<Typography  color="textSecondary">
         First Name:  {employee.firstName}
</Typography>
<Typography  color="textSecondary">
         Last Name:  {employee.lastName}
</Typography>
<Typography color="textSecondary">
             Department: {employee.empDept}
</Typography>
<Typography color="textSecondary">
             Role: {employee.empRole}
</Typography>
<Typography color="textSecondary">
             Location: {employee.location}
</Typography>
           {/* Add more information as needed */}
</Grid>
</Grid>
</CardContent>
</Card>
 );
};
export default EmployeeDetailsPage;