import './App.css';
//import Employee from '../src/Components/Employee/Employee.js';
//import EmployeeDetails from '../src/Components/Employee/EmployeeDetails.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './Components/Search/SearchBar.js';
import EmployeeDetailsPage from './Components/Employee/EmployeeDetailsPage.js';
import NavBar from './Components/NavBar/NavBar.js';
import SearchResults from './Components/Search/SearchResults.js';
import EmployeeList from './Components/Employee/EmployeeList.js';
import UpdateEmployee from './Components/Employee/UpdateEmployee.js';
import EmployeeForm from './Components/Employee/EmployeeForm.js';

const App = () => {
  return (
 <Router>
 <NavBar/>
 <div className='main'>  
 <Switch>
 <Route exact path="/"  component={SearchBar} />
  <Route path="/api/getActiveEmp/:employeeId" exact component={EmployeeDetailsPage} />
 <Route  path="/employee-list"  exact component={EmployeeList} />
 <Route path="/search-results" component={SearchResults} />
 <Route path="/create" component={EmployeeForm} />
 <Route path="/update/:employeeId" component={UpdateEmployee} />
       {/* Add other routes as needed */}

        {/* Add other routes as needed */}
 </Switch>
 </div>
 </Router>
  );
 };
 
export default App;
