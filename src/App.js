import './App.css';
//import Employee from '../src/Components/Employee/Employee.js';
//import EmployeeDetails from '../src/Components/Employee/EmployeeDetails.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './Components/Employee/SearchBar.js';
import Navbar from './Components/Employee/Navbar.js';
import Employee from './Components/Employee/Employee.js';

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
 <Navbar />
 <Switch>
 <Route exact path="/" component={SearchBar} />
 <Route path="/employee-list" component={Employee} />
        {/* Add other routes as needed */}
 </Switch>
 </Router>
  );
 };
 
export default App;
