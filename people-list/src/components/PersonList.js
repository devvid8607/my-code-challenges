import React from "react";
import Person from "./Person";

function PersonList() {
  const people = [
    {
      img: 22,
      name: "John",
      job: "Developer",
    },
    {
      img: 34,
      name: "Bob",
      job: "Designer",
    },
    {
      img: 56,
      name: "Peter",
      job: "Artist",
    },
  ];
  return (
    <div>
      {people.map((person) => (
        <Person person={person}></Person>
      ))}
    </div>
  );
}

export default PersonList;
