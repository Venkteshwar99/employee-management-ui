import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Grid,
  Snackbar,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import "./Css/UpdateEmployee.css"; // Add your CSS file
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const UpdateEmployee = ({ match }) => {
  const [employee, setEmployee] = useState({ active: "" });
  const employeeId = match.params.employeeId;
  const [successMessage, setSuccessMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    // Fetch the details for the specific employee
    axios
      .get(`http://localhost:8081/api/emp/getActiveEmp/${employeeId}`)
      .then((response) => setEmployee(response.data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
  }, [employeeId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8081/api/emp/update/${employeeId}`, employee)
      .then((response) => {
        console.log("Employee updated successfully:", response.data);
        setSuccessMessage("Employee updated successfully");
        setOpenSnackbar(true);
        setTimeout(() => {
          setIsUpdated(true);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error updating employee:", error);
        // Handle error
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  if (isUpdated) {
    return <Redirect to={`/api/emp/getActiveEmp/${employeeId}`} />;
  }
  return (
    <form onSubmit={handleFormSubmit} className="update-employee-form">
      <Grid container spacing={2}>
        <h2>Update Employee</h2>
        <Grid item xs={12} sm={7}>
          {/* <Card className='employee-photo'> */}
          <img
            component="img"
            alt={employee.fullName}
            className="image-media"
            src={`http://localhost:8081/api/emp/photo/${employeeId}`}
          />
          {/* </Card> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Employee ID"
            name="empId"
            value={employee.empId || ""}
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
            value={employee.email || ""}
            onChange={handleInputChange}
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={employee.firstName || ""}
            onChange={handleInputChange}
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={employee.lastName || ""}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Department"
            name="empDept"
            value={employee.empDept || ""}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Role"
            name="empRole"
            value={employee.empRole || ""}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={employee.location || ""}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="account-status-label">Account Status</InputLabel>
            <Select
              labelId="account-status-label"
              id="account-status"
              name="active"
              value={employee.active}
              onChange={handleInputChange}
              label="Account Status"
            >
              <MenuItem value={true}>Active</MenuItem>
              <MenuItem value={false}>Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* <Grid item xs={12}  sm={6}>
 <TextField
            fullWidth
            label="Account Status"
            name="active"
            value={employee.active || ''}
            onChange={handleInputChange}
            required
          />
 </Grid> */}
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
        autoHideDuration={2000}
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
