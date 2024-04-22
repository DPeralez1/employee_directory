import "../index.css";
import Employee from "../components/Employee";
import { useState } from "react";
import AddEmployee from "../components/AddEmployee";
import { v4 as uuidv4 } from "uuid";
import EditEmployee from "../components/EditEmployee";
import Header from "../Header";

function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 0,
      name: "David",
      role: "Big Papi",
      img: "https://images.pexels.com/photos/8474432/pexels-photo-8474432.jpeg",
    },
    {
      id: 1,
      name: "Andrea",
      role: "Mamma Bear",
      img: "https://images.pexels.com/photos/5480690/pexels-photo-5480690.jpeg?",
    },
    {
      id: 2,
      name: "TARS",
      role: "Third in Command",
      img: "https://images.pexels.com/photos/7169858/pexels-photo-7169858.jpeg",
    },
    {
      id: 3,
      name: "CASE",
      role: "Fourth in Command",
      img: "https://images.pexels.com/photos/7014881/pexels-photo-7014881.jpeg",
    },
    {
      id: 4,
      name: "KIPP",
      role: "Missing",
      img: "https://images.pexels.com/photos/6532130/pexels-photo-6532130.jpeg",
    },
    {
      id: 5,
      name: "MURPH",
      role: "Camera",
      img: "https://images.pexels.com/photos/5726785/pexels-photo-5726785.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="App bg-gray-300 min-h-screen">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center my-2">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default Employees;
