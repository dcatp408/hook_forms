import React, {useState} from "react";
import Form from './components/Form.jsx';
import Results from './components/Results.jsx';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ state, setState] = useState ({
    firstName: "",
    lastName: "",
    email:"",
    password:"",
    confirmPassword:""
  });
  return (
    <div className="App">
      <Form inputs={state} setInputs={setState} />
      <Results data={state}/>
    </div>
  );
}

export default App;
