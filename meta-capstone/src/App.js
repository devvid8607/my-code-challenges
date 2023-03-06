import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./sections/Home";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Reservations from "./sections/Reservations";
import OrderOnline from "./sections/OrderOnline";
import Login from "./sections/Login";
import LittleLemonNavBar from "./components/LittleLemonNavBar";
import Highlights from "./sections/Highlights";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <LittleLemonNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Highlights />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
