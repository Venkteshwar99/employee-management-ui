import axios from "axios";
const  GETALL_API_URL="http://localhost:8081/api/findAll";


class EmployeeService{
    getEmployees(){
        return axios.get( GETALL_API_URL);
    }
}

export default new EmployeeService ();