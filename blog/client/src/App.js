import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import WritePosts from "./pages/WritePosts";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<WritePosts />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/singlePost" element={<SinglePost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
