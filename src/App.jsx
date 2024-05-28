import "./App.css";

import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import EmployeeComponent from "./components/EmployeeComponent";
{
  /*import EmployeeComponent from "./components/EmployeeComponent";*/
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>

          <Route path="/employees" element={<ListEmployeeComponent />}></Route>

          <Route path="/add-employee" element={<EmployeeComponent />}></Route>
          <Route
            path="/edit-employee/:id"
            element={<EmployeeComponent />}
          ></Route>
          <Route path="/register" element={<RegisterComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
