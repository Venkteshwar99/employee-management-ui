import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, CardMedia, Link } from '@mui/material';
import '../Employee/EmployeeList.css'; // Import the CSS file
import axios from 'axios';
const Employee = () => {
 const [employees, setEmployees] = useState([]);
 useEffect(() => {
    axios.get('http://localhost:8081/api/findAll')
    .then(response => setEmployees(response.data))
    .catch(error => console.error('Error fetching employees:', error));
 }, []);
 return (
    <Grid container spacing={2}>
         {employees.map((employee, index) => (
    <Grid item key={employee.employeeId} xs={12} sm={6} md={6} lg={6}>
    <Card className="hover-card">
    <Grid container>
    <Grid item xs={8} sm={8} md={8} lg={8}>
        <CardContent>
        <Link href={`/employee/${employee.empId}`}>
    <Typography variant="h6" component="div">
                           {employee.fullName}          
    </Typography>
    </Link>
       <Typography color="textSecondary">
                       Email: {employee.email}
    </Typography>
   
       {/* <Typography color="textSecondary">
                       Department: {employee.empDept}
    </Typography>
    <Typography color="textSecondary">
                       Role: {employee.empRole}
    </Typography>
    <Typography color="textSecondary">
                       Location: {employee.location}
    </Typography> */}
    </CardContent>
    </Grid>
    <Grid item xs={4} sm={4} md={4} lg={4}>
    <CardMedia
                     component="img"
                     alt={employee.empName}
                    className="card-media"
                     image={"http://localhost:8081/api/photo/"+employee.empId} // Add the image URL from the backend
                   />
    </Grid>
    </Grid>
    </Card>
             {index % 2 !== 0 && <div style={{ width: '100%', height: '20px' }} />} {/* Add space after every two cards */}
    </Grid>
         ))}
    </Grid>
     );
    };
    

export default Employee;