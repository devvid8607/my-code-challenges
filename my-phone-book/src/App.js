import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import PhoneBookForm from "./components/PhoneBookForm";
import InformationTable from "./components/InformationTable";

let entries_data = [
  {
    firstName: "Alexander",
    lastName: "Hamilton",
    phone: "201-225-2255",
  },
  {
    firstName: "George",
    lastName: "Washington",
    phone: "201-225-2244",
  },
  {
    firstName: "Angelica",
    lastName: "Schuyler",
    phone: "201-225-3344",
  },
];

function App() {
  const [entries, setEntries] = useState(entries_data);
  const addEntry = (entry) => {
    setEntries((entries) => [...entries, entry]);
  };
  return (
    <div className="App">
      <h1>Phone book</h1>
      <PhoneBookForm addEntry={addEntry} />
      <InformationTable entries={entries} />
    </div>
  );
}

export default App;
