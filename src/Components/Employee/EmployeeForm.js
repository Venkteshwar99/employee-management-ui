import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Grid,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import "./Css/EmployeeForm.css";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    empDept: "",
    empRole: "",
    location: "",
    // photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handlePhoto = (e) => {
  //   const file = e.target.files[0];
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     photo: file,
  //   }));
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post(`http://localhost:8081/api/add`, formData)
      .then((response) => {
        console.log("Employee Created successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error Creating employee:", error);
      });
  };
  return (
    <form onSubmit={handleSubmit} className="create-employee-form">
      <Grid container spacing={2}>
        <h2>Create Employee</h2>

        {/* <Grid item xs={12}>
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={handlePhoto}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span">
                Upload Photo
            </Button>
          </label>
        </Grid> */}

        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            variant="outlined"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Location"
            variant="outlined"
            name="location"
            value={formData.location}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="empDept-label">Department</InputLabel>
            <Select
              labelId="empDept-label"
              id="empDept"
              name="empDept"
              value={formData.empDept}
              onChange={handleChange}
              label="empDept"
              required
            >
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="empRole-label">Role</InputLabel>
            <Select
              labelId="empRole-label"
              id="empRole"
              name="empRole"
              value={formData.empRole}
              onChange={handleChange}
              label="empRole"
              required
            >
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Developer">Developer</MenuItem>
              <MenuItem value="Analyst">Analyst</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="create-button"
      >
        Submit
      </Button>
    </form>
  );
};
export default EmployeeForm;
