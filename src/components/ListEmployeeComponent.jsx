import { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "../services/EmployeeService";
const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();
  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function addNewEmployee() {
    navigator("/add-employee");
  }
  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    console.log(id);

    deleteEmployee(id)
      .then(() => {
        getAllEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center">Çalışan Listesi</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
        Yeni Çalışan Ekle
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Çalışan Username</th>
            <th>Çalışan İsim</th>
            <th>Çalışan Soyisim</th>
            <th>Çalışan Email</th>
            <th>Aksiyonlar</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Güncelle
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeEmployee(employee.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
