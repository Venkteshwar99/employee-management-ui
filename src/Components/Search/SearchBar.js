import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../Search/Css/SearchBar.css';
const SearchBar = () => {
 const [searchQuery, setSearchQuery] = useState('');
 const [employeeDetails, setEmployeeDetails] = useState(null);
 const [employeeNotFound, setEmployeeNotFound] = useState(false);
 const history = useHistory();
 const handleSearch = async () => {
   try {
     const response = await axios.get(`http://localhost:8081/api/getEmp/name?name=${encodeURIComponent(searchQuery)}`);
     const employee = response.data;
     console.log('SearchBar response:', response.data); // Log the API response
     if (employee) {
       console.log('Employee found:', employee);
       setEmployeeDetails([employee]);
       setEmployeeNotFound(false);
       history.push('/search-results',{employeeDetails:[employee]});
     } else {
       console.log('Employee not found');
       setEmployeeNotFound(true);
       setEmployeeDetails(null);
     }
   } catch (error) {
     console.error('Error fetching employee:', error);
     setEmployeeNotFound(true);
     setEmployeeDetails(null);
   }
 };
 return (
<div className="search-bar-container">
<div className="search-bar-wrapper">
<input
         type="text"
         placeholder="Search employee by name"
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
       />
<button onClick={handleSearch}>Search</button>
</div>
     {employeeNotFound && <div className="employee-not-found">Employee not found</div>}
</div>
 );
};
export default SearchBar;