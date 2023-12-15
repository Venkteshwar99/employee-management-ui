import './App.css';
//import Employee from '../src/Components/Employee/Employee.js';
//import EmployeeDetails from '../src/Components/Employee/EmployeeDetails.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './Components/Employee/SearchBar.js';
import Employee from './Components/Employee/Employee.js';
import EmployeeDetailsPage from './Components/Employee/EmployeeDetailsPage.js';
import NavBar from './Components/Employee/NavBar.js';
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
        <NavBar/>
      <div className='main'>
      
 <Switch>
 <Route exact path="/"  component={SearchBar} />
  <Route path="/api/getActiveEmp/:employeeId" exact component={EmployeeDetailsPage} />
 <Route  path="/employee-list"  exact component={Employee} />

 <Route  path="/search-results"  exact component={SearchResults} />
        {/* Add other routes as needed */}
 </Switch>
 </div>
 </Router>
  );
 };
 
export default App;
