import React, { useState, useEffect } from "react";

import "../App.css";

function Reservations({ availableTimes, dispatchMethod, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [noOfGuests, setNoOfGuests] = useState(0);
  const [occassion, setOccasion] = useState("");

  useEffect(() => {
    dispatchMethod({ type: "updateTimes", value: date });
  }, [date]);

  return (
    <>
      <h2 className="mt-3 pt-4">Make Bookings</h2>
      <form id="reservation_form" className="mt-5">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time "
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((availableTime, index) => {
            return (
              <option key={index} value={availableTime}>
                {availableTime}
              </option>
            );
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={noOfGuests}
          onChange={(e) => setNoOfGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occassion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button onClick={submitForm}>Make your Reservation</button>
      </form>
    </>
  );
}

export default Reservations;
