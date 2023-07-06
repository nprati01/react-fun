import "./App.css";
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
          <Employee name="Cale" role="intern" />
          <Employee name="Abby" role ={role} />
          <Employee name="John" />
          <Employee />
        </>
      ) : (
        <p>You cannont see the employees </p>
      )}
    </div>
  );
}

export default App;
