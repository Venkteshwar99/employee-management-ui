import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import './Css/UpdateEmployee.css'; // Add your CSS file

const UpdateEmployee = ({ match }) => {
 const [employee, setEmployee] = useState({});
 const employeeId = match.params.employeeId;
 const [successMessage, setSuccessMessage] = useState('');
 const [openSnackbar, setOpenSnackbar] = useState(false);


 useEffect(() => {
   // Fetch the details for the specific employee
   axios.get(`http://localhost:8081/api/getActiveEmp/${employeeId}`)
     .then(response => setEmployee(response.data))
     .catch(error => console.error('Error fetching employee details:', error));
 }, [employeeId]);

 const handleInputChange = (e) => {
   const { name, value } = e.target;
   setEmployee(prevEmployee => ({
     ...prevEmployee,
     [name]: value,
   }));
 };
 const handleFormSubmit = (e) => {
   e.preventDefault();
   axios.put(`http://localhost:8081/api/update/${employeeId}`, employee)
     .then(response => {
        console.log('Employee updated successfully:', response.data);
        setSuccessMessage('Employee updated successfully');
        setOpenSnackbar(true);
     })
     .catch(error => {
       console.error('Error updating employee:', error);
       // Handle error
     });
 };

 const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (

<form onSubmit={handleFormSubmit} className="update-employee-form">
  <h2>Update Employee</h2>  
 <Grid container spacing={2}>
 <Grid item  xs={6} sm={7}>
<img
               component="img"
               alt={employee.empId}
               className="image-media"
               src={`http://localhost:8081/api/photo/${employee.empId}`}
             />
             </Grid>
 <Grid item xs={12} sm={6}>
 <TextField
            fullWidth
            label="Employee ID"
            name="empId"
            value={employee.empId || ''}
            onChange={handleInputChange}
            disabled
          />
 </Grid>

 {/* <Grid item xs={12}  sm={6}>
 <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={employee.fullName || ''}
            onChange={handleInputChange}
          />
 </Grid> */}
 <Grid item xs={3} sm={6}>
 <TextField
            fullWidth
            label="Email"
            name="email"
            value={employee.email || ''}
            onChange={handleInputChange}
          />
 </Grid>

 <Grid item xs={12}  sm={6}>
 <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={employee.firstName || ''}
            onChange={handleInputChange}
          />
 </Grid>

 <Grid item xs={12}  sm={6}>
 <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={employee.lastName || ''}
            onChange={handleInputChange}
          />
 </Grid>
 <Grid item xs={12}  sm={6}>
 <TextField
            fullWidth
            label="Department"
            name="empDept"
            value={employee.empDept || ''}
            onChange={handleInputChange}
          />
 </Grid>
 <Grid item xs={12}  sm={6}>
 <TextField
            fullWidth
            label="Role"
            name="Role"
            value={employee.empRole || ''}
            onChange={handleInputChange}
          />
 </Grid>
 <Grid item xs={12}  sm={6}>
 <TextField
            fullWidth
            label="Location"
            name="location"
            value={employee.location || ''}
            onChange={handleInputChange}
          />
 </Grid>
 </Grid>
 <Button
        type="submit"
        variant="contained"
        color="primary"
        className="submit-button"
 >
        Update
 </Button>
 <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
 >
 <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
 >
          {successMessage}
 </MuiAlert>
 </Snackbar>
 </form>
  );
 };
 
export default UpdateEmployee;