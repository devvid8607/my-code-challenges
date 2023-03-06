import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import MyNavBar from "./Components/myNavBar";
import SingleCocktail from "./Pages/SingleCocktail";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </div>
  );
}

export default App;
