import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "David",
      role: "Big Papi",
      img: "https://images.pexels.com/photos/8474432/pexels-photo-8474432.jpeg",
    },
    {
      name: "Andrea",
      role: "Mamma Bear",
      img: "https://images.pexels.com/photos/5480690/pexels-photo-5480690.jpeg?",
    },
    {
      name: "TARS",
      role: "Third in Command",
      img: "https://images.pexels.com/photos/7169858/pexels-photo-7169858.jpeg",
    },
    {
      name: "CASE",
      role: "Fourth in Command",
      img: "https://images.pexels.com/photos/7014881/pexels-photo-7014881.jpeg",
    },
    {
      name: "KIPP",
      role: "Missing",
      img: "https://images.pexels.com/photos/6532130/pexels-photo-6532130.jpeg",
    },
    {
      name: "MURPH",
      role: "Camera",
      img: "https://images.pexels.com/photos/5726785/pexels-photo-5726785.jpeg",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(uuidv4());
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
