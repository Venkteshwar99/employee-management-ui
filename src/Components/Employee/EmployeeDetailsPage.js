import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import Email from '@mui/icons-material/Email'; // Import the alternate email icon
import './Css/EmployeeDetailsPage.css'; // Add your CSS file
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
<div className="employee-details-page">
<Card className="employee-details-content">
<CardContent>
<Grid container spacing={2}>
<Grid item xs={12} className="photo-section">
<CardMedia
               component="img"
               alt={employee.empName}
               className="card-media"
               image={`http://localhost:8081/api/photo/${employee.empId}`}
             />
<Typography variant="h6" component="div" className="full-name">
               {employee.fullName}
</Typography>
</Grid>
<Grid item xs={12}>
<hr className="divider" />
</Grid>
<Grid item xs={12}>
<div className="details-section">
<div className="details-field">
<Typography color="textSecondary">
<span>ID:</span> {employee.empId}
</Typography>
</div>

<div className="details-field">
<Typography color="textSecondary">
<span>First Name:</span> {employee.firstName}
</Typography>
</div>

<div className="details-field">
<Typography color="textSecondary">
<span>Last Name:</span> {employee.lastName}
</Typography>
</div>


<div className="details-field">
<Typography color="textSecondary">
<span>Email:</span>
<Email style={{ marginRight: '5px' }} />
<a href={`mailto:${employee.email}`} className="email-link">
                     {employee.email}
</a>
</Typography>
</div>
<div className="details-field">
<Typography color="textSecondary">
<span>Department:</span> {employee.empDept}
</Typography>
</div>
<div className="details-field">
<Typography color="textSecondary">
<span>Role:</span> {employee.empRole}
</Typography>
</div>
<div className="details-field">
<Typography color="textSecondary">
<span>Location:</span> {employee.location}
</Typography>
</div>
               {/* Add more information as needed */}
</div>
</Grid>
</Grid>
</CardContent>
</Card>
</div>
 );
};
export default EmployeeDetailsPage;