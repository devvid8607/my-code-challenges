import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const initialState = {
    fname: "",
    lname: "",
    age: 0,
  };
  const [form, setValues] = useState(initialState);

  const [display, setDisplay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(true);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            onChange={(e) => setValues({ ...form, fname: e.target.value })}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            onChange={(e) => setValues({ ...form, lname: e.target.value })}
          ></input>
        </div>
        <div>
          <label>Age</label>
          <input
            onChange={(e) => setValues({ ...form, age: e.target.value })}
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div style={{ display: display ? "block" : "none" }}>
        <div>
          <h2>Request sent to db with the following values</h2>
        </div>
        <div>First name:{form.fname}</div>
        <div>Last name:{form.lname}</div>
        <div>Age:{form.age}</div>
      </div>
    </div>
  );
}

export default App;
