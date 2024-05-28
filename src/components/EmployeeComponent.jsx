import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";
function EmployeeComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigator = useNavigate();
  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();
    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee);
      if (id) {
        updateEmployee(id, employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "İsim Gereklidir!";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Soyisim Gereklidir!";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email Gereklidir!";
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  }
  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Çalışanı Güncelle</h2>;
    } else {
      return <h2 className="text-center">Çalışan Ekle</h2>;
    }
  }

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">İsim</label>
                <input
                  type="text"
                  placeholder="İsminizi Giriniz!"
                  name="firstName"
                  value={firstName}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                {errors.firstName && (
                  <div className="invalid-feedback"> {errors.firstName} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Soyisim</label>
                <input
                  type="text"
                  placeholder="Soyisminizi Giriniz!"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                {errors.lastName && (
                  <div className="invalid-feedback"> {errors.lastName} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  placeholder="Emailinizi Giriniz!"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {errors.email && (
                  <div className="invalid-feedback"> {errors.email} </div>
                )}
              </div>
              <button
                className="btn btn-success"
                onClick={saveOrUpdateEmployee}
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeComponent;
