
import './App.css';
import Employee from './components/employees';

function App() {
  console.log('we are about to list the employees');
  const showEmployees = true;
  return (
    <div className="App">
    {showEmployees ?
    <>
      <Employee />
      <Employee />
      <Employee />
      <Employee />
    </>
    :
    <p>You cannont see the employees </p>
    }


    </div>
  );
}

export default App;
