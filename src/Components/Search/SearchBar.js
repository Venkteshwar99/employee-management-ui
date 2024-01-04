import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CustomAlert from "./CustomAlert"; // Import the CustomAlert component
import "../Search/Css/SearchBar.css";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const history = useHistory();
  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setAlertMessage("Please enter Name to search.");
      setShowAlert(true);
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8081/api/getEmp/name?name=${encodeURIComponent(
          searchQuery
        )}`
      );
      const employees = response.data;
      if (Array.isArray(employees) && employees.length > 0) {
        history.push("/search-results", { employeeDetails: employees});
      } else {
        setAlertMessage("No results found.");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
      setAlertMessage("Error fetching employees. Please try again later.");
      setShowAlert(true);
    }
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <div className="search-bar-container">
      <h2>Employee Management System</h2>
      <div className="search-bar-wrapper">
        <input
          type="text"
          placeholder="Search employee by Id, Name, Department, Location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <CustomAlert
        open={showAlert}
        message={alertMessage}
        onClose={handleCloseAlert}
      />
    </div>
  );
};
export default SearchBar;
