import "./App.css";

import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import EmployeeComponent from "./components/EmployeeComponent";
{
  /*import EmployeeComponent from "./components/EmployeeComponent";*/
}
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import { isUserLoggedIn } from "./services/AuthService";
import RandevuComponent from "./components/RandevuComponent";
import PropTypes from "prop-types";

function App() {
  function AuthenticatedRoute({ children }) {
    const isAuth = isUserLoggedIn();

    if (isAuth) {
      return children;
    }

    return <Navigate to="/randevu" />;
  }
  AuthenticatedRoute.propTypes = {
    children: PropTypes.node, // children prop'unun tipi olarak node kullanılır
  };
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
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route
            path="/randevu"
            element={
              <AuthenticatedRoute>
                <RandevuComponent />
              </AuthenticatedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
