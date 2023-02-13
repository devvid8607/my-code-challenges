import "./App.css";
import data from "./text";
import { useState } from "react";
import Values from "values.js";

function App() {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("hello world");
  //   let amount = parseInt(count);
  //   if (amount <= 0) amount = 1;
  //   if (amount >= 8) amount = 8;
  //   setText(data.slice(0, amount));
  // };

  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <div className="App">
      <h2>Colour Generator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          className={`${error ? "error" : null}`}
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <button type="submit">Generate</button>
      </form>
      <div className="colours">
        <h4>List goes here</h4>
        {/* {
          list.map((color,index)=>{
            return <SingleColor key={index} {...color} index={index}
          })
        } */}
      </div>
      {/* <h2>Lorem Ipsum</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button type="submit">Generate</button>
      </form>
      <div className="lorem-para">
        {text.map((item, index) => {
          return <p key={index}>{text}</p>;
        })}
      </div> */}
    </div>
  );
}

export default App;
