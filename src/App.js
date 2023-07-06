import "./index.css";
import Employee from "./components/employees";
import { useState } from "react";

function App() {
  const [role, setRole] = useState();
  const [employees, setEmployees] = useState([
    {
      name: 'Kale',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
    },
    {
      name: 'Broccli',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
    },
    {
      name: 'Carrot',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
    },
    {
      name: 'Bob',
      role: 'The Builder',
      img: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
    },
    {
      name: 'Kale',
      role: 'CTO',
      img: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
    },
    {
      name: 'Jessipuh',
      role: 'Project Manager',
      img: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
    },
    {
      name: 'Andrew',
      role: 'Engineer manager',
      img: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
    },
  ])

  console.log("we are about to list the employees");
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
               setRole(e.target.value)
            }}
          />
          <div className="flex flex-wrap justify center">
            {employees.map((employee) => {
              console.log(employee)
              return(
                <Employee name={employee.name} role={employee.role} img={employee.img} />
                )


            })}

          </div>

        </>
      ) : (
        <p>You cannont see the employees </p>
      )}
    </div>
  );
}

export default App;
