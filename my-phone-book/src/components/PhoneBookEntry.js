import React from "react";

function PhoneBookEntry({ entry }) {
  return (
    <tr>
      <td>{entry.firstName}</td>
      <td>{entry.lastName}</td>
      <td>{entry.phone}</td>
    </tr>
  );
}

export default PhoneBookEntry;
