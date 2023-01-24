import React from "react";
import "./styles/Person.css";

function Person({ person }) {
  const url = `https://randomuser.me/api/portraits/thumb/men/${person.img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt=""></img>
      <h4>{person.name}</h4>
      <h4>{person.job}</h4>
    </div>
  );
}

export default Person;
