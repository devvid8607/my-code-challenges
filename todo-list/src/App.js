import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  const removeCity = (i) => {
    setCities((cities) => {
      return cities.filter((city) => city !== i);
    });
  };

  return (
    <div className="App">
      <input onChange={(e) => setCity(e.target.value)}></input>
      <button onClick={() => setCities([...cities, city])}>Add City</button>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            {city}-<button onClick={() => removeCity(city)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
