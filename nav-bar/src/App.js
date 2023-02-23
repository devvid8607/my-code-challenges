import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Modal from "./Modal";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home />
      <Modal />
      <Sidebar />
    </div>
  );
}

export default App;
