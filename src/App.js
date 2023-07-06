import "./index.css";
import Employee from "./components/employees";
import { useState } from "react";

function App() {
  const [role, setRole] = useState();

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
            <Employee name="Cale" role="intern" />
            <Employee name="Abby" role ={role} />
            <Employee name="John" />
            <Employee />

          </div>

        </>
      ) : (
        <p>You cannont see the employees </p>
      )}
    </div>
  );
}

export default App;
