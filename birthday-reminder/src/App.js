import logo from "./logo.svg";
//import "./App.css";
import List from "./components/List";
import Data from "./components/Data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <div className="App">
      <main>
        <section class="container">
          <h3>{people.length} Birthdays Today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </div>
  );
}

export default App;
