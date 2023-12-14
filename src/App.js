import './App.css';
//import Employee from '../src/Components/Employee/Employee.js';
//import EmployeeDetails from '../src/Components/Employee/EmployeeDetails.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './Components/Employee/SearchBar.js';
import Employee from './Components/Employee/Employee.js';
import EmployeeDetailsPage from './Components/Employee/EmployeeDetailsPage.js';
import SearchResults from './Components/Employee/SearchResults.js';

// function App() {
//   return (
//    <div style={{padding:'20px'}}>
//    <h1>Employee Management System</h1>
//    <Employee/>
//    </div>
//   );
// }

// export default App;
const App = () => {
  return (
 <Router>

 <Switch>
 <Route exact path="/" component={SearchBar} />
  <Route path="/api/getActiveEmp/:employeeId" component={EmployeeDetailsPage} />
 <Route path="/employee-list" component={Employee} />
        {/* Add other routes as needed */}
 </Switch>
 </Router>
  );
 };
 
export default App;
