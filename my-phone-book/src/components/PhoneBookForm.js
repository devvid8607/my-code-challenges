import React, { useState } from "react";

function PhoneBookForm({ addEntry }) {
  const initialEntry = {
    firstName: "",
    lastName: "",
    phone: "",
  };

  const [entry, setEntry] = useState(initialEntry);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(entry);
    addEntry(entry);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <br />
        <input
          onChange={(e) => setEntry({ ...entry, firstName: e.target.value })}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <br />
        <input
          onChange={(e) => setEntry({ ...entry, lastName: e.target.value })}
        ></input>
      </div>
      <div>
        <label>Number</label>
        <br />
        <input
          onChange={(e) => setEntry({ ...entry, phone: e.target.value })}
        ></input>
      </div>
      <div>
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
}

export default PhoneBookForm;
