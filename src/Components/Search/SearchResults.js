import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Snackbar,
} from "@mui/material";
import "../Search/Css/SearchResults.css";
import MuiAlert from "@mui/material/Alert";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const SearchResults = () => {
  const location = useLocation();
  const { state } = location || {};
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  const [employeeDetails, setEmployeeDetails] = useState([]);
  useEffect(() => {
    // Fetch initial employee data from the server
    if (state && state.employeeDetails) {
      setEmployeeDetails(state.employeeDetails);
    }
  }, [state]);
  const handleStatusUpdate = (id, isActive) => {
    axios
      .patch(`http://localhost:8081/api/update-status/${id}`, {
        active: !isActive,
      })
      .then((response) => {
        console.log('Api Response:',response.data);
        const updatedEmployeeDetails = employeeDetails.map((employee) =>
        employee.empId === id
          ? { ...employee, isActive: response.data.active } // Update isActive based on API response
          : employee
      );
         setEmployeeDetails(updatedEmployeeDetails);
        setOpenSnackbar(true);
        setSuccessMessage("Status Updated successfully");
        setTimeout(() => {
          setIsUpdated(true);
        }, 4000);
             })
       .catch((error) => {
     console.error("Error updating status:", error);
   });
};
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  if (isUpdated) {
    return <Redirect to={`/`} />;
  }
  return (
    <div>
      <h2>Search Results</h2>
      {state &&
      state.employeeDetails &&
      Array.isArray(state.employeeDetails) &&
      state.employeeDetails.length > 0 ? (
        <TableContainer component={Paper}>
          <Table className="custom-table">
            {""}
            {/* Apply custom-table class */}
            <TableHead sx={{ backgroundColor: "#3498db" }}>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Account Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.employeeDetails.map((employee) => (
                <TableRow key={employee.empId}>
                  <TableCell>
                    <Link to={`/api/getActiveEmp/${employee.empId}`}>
                      {employee.empId}
                    </Link>
                  </TableCell>
                  <TableCell>{employee.fullName}</TableCell>
                  <TableCell>
                    {employee.active ? "Active" : "InActive"}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color={employee.active ? "secondary" : "primary"}
                      onClick={() =>
                        handleStatusUpdate(employee.empId, employee.active)
                      }
                    >
                      {employee.active ? "Deactivate" : "Activate"}
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
                  </TableCell>
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
