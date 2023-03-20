import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./sections/Home";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Reservations from "./sections/Reservations";
import OrderOnline from "./sections/OrderOnline";
import Login from "./sections/Login";
import LittleLemonNavBar from "./components/LittleLemonNavBar";
import Highlights from "./sections/Highlights";
import Footer from "./sections/Footer";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./remoteCaalls/Remote";
import { act } from "@testing-library/react";
import ConfirmedBooking from "./sections/ConfirmedBooking";

const initialState = [
  { time: "17:00", slots: 3 },
  { time: "18:00", slots: 4 },
  { time: "19:00", slots: 2 },
  { time: "20:00", slots: 4 },
  { time: "21:00", slots: 3 },
  { time: "22:00", slots: 2 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "update": {
      return state.map((x) =>
        x.time !== action.value.time
          ? x
          : { ...x, slots: Math.max(0, x.slots - 1) }
      );
    }
    case "updateTimes":
      console.log("in reducer:" + action.value);
      return updateTimes(action.value);

    case "initializeTimes":
      console.log("in initialize:" + action.value.date);
      return initializeTimes(action.value.date);
    default:
      return state;
  }
};

const updateTimes = (date) => {
  // console.log("in update:" + date);
  const resp = fetchAPI(new Date());
  // console.log("in update times:" + resp);
  return resp;
};
const initializeTimes = (date) => {
  // console.log("in initialize:" + date);
  const resp = fetchAPI(date);

  return resp;
};

function App() {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const resp = submitAPI(formData);
    if (resp) navigate("/confirmedBooking");
  };

  const [availableTimes, dispatch] = useReducer(
    reducer,
    initializeTimes(new Date())
  );

  return (
    <div className="App">
      <LittleLemonNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Highlights />} />
        <Route
          path="/reservations"
          element={
            <Reservations
              availableTimes={availableTimes}
              dispatchMethod={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
