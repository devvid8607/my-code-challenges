import React from "react";

function List({ people }) {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} class="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h4>{age}</h4>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;
