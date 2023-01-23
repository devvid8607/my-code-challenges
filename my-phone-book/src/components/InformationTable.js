import React from "react";
import PhoneBookEntry from "./PhoneBookEntry";

function InformationTable({ entries }) {
  return (
    <div>
      <div>InformationTable</div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <PhoneBookEntry entry={entry} key={entry.firstName} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InformationTable;
