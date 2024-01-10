import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Link,
} from "@mui/material";
import "../Employee/Css/EmployeeList.css"; // Import the CSS file
import axios from "axios";
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/emp/findAllActive")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  return (
    <Grid container spacing={2}>
      {employees.map((employee, index) => (
        <Grid item key={employee.empId} xs={12} sm={4} md={4} lg={4}>
          <Card className="hover-card">
            <Grid container>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    <Link href={`/api/getActiveEmp/${employee.empId}`}>
                      {employee.fullName}
                    </Link>
                  </Typography>

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
              <Grid item xs={4} sm={4} md={4} lg={2}>
                <CardMedia
                  component="img"
                  alt={employee.empName}
                  className="card-media"
                  image={"http://localhost:8081/api/emp/photo/" + employee.empId} // Add the image URL from the backend
                />
              </Grid>
            </Grid>
          </Card>
          {index % 2 !== 0 && <div style={{ width: "100%", height: "20px" }} />}{" "}
          {/* Add space after every two cards */}
        </Grid>
      ))}
    </Grid>
  );
};

export default EmployeeList;
