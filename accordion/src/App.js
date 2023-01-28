// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import data from "./Data";
import SingleQuestion from "./SingleQuestion";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="App">
      <div className="main-title">Questions and Answers About Login</div>
      <div>
        {data.map((question) => (
          <SingleQuestion key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}

export default App;
