import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Button,
  Snackbar,
} from "@mui/material";
import Email from "@mui/icons-material/Email";
import "./Css/EmployeeDetailsPage.css";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import MuiAlert from "@mui/material/Alert";

const EmployeeDetailsPage = ({ match }) => {
  const [employee, setEmployee] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const employeeId = match.params.employeeId;

  useEffect(() => {
    // Fetch the details for the specific employee
    axios
      .get(`http://localhost:8081/api/getActiveEmp/${employeeId}`)
      .then((response) => setEmployee(response.data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
  }, [employeeId]);

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8081/api/deleteActive/${employeeId}`, employee)
      .then((response) => {
        console.log("Employee deleted successfully:", response.data);
        setOpenSnackbar(true);
        setSuccessMessage("Employee deleted successfully");
        setTimeout(() => {
          setIsDeleted(true);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  if (!employee) {
    return <div>Loading...</div>;
  }
  if (isDeleted) {
    return <Redirect to="/employee-list" />;
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="employee-details-page">
      <div className="head">
        {" "}
        <h2>Employee Detail Page</h2>
        <Card className="employee-details-content">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={3} sm={6} className="photo-section">
                <CardMedia
                  component="img"
                  alt={employee.empName}
                  className="media"
                  image={`http://localhost:8081/api/photo/${employee.empId}`}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" component="div" className="full-name">
                  {employee.fullName}
                </Typography>
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
                      <Email style={{ marginRight: "5px" }} />
                      <a
                        href={`mailto:${employee.email}`}
                        className="email-link"
                      >
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

                  <div className="buttons-section">
                    {" "}
                    {/* Update button */}
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={{
                        pathname: `/update/${employeeId}`,
                        state: { employee }, // Pass employee details as state to the EmployeeUpdate component
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={handleDelete}
                    >
                      Delete
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
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default EmployeeDetailsPage;
