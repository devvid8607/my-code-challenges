import React from "react";
import { Form } from "react-bootstrap";
import { useCocktailContext } from "../Context/CocktailContext";

function SearchComponent() {
  const { setSearchTerm } = useCocktailContext();
  return (
    <Form className="mx-auto my-auto mt-4" style={{ width: 500 }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Search Cocktails"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}

export default SearchComponent;
