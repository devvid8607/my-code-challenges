import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCocktailContext } from "../Context/CocktailContext";
import CocktailCard from "./CocktailCard";

function CocktailList() {
  const { loading, cocktailList } = useCocktailContext();

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (cocktailList.length < 1) {
    return <h2 className="">No Items Matched The Search Criteria</h2>;
  }

  return (
    <>
      <h1 class="mx-2 my-2">Cocktail List</h1>
      <Row
        me={5}
        md={2}
        xs={1}
        lg={3}
        className="g-3"
        style={{ marginLeft: 40 }}
      >
        {cocktailList.map((item) => (
          <CocktailCard key={item.id} item={item} />
        ))}
      </Row>
    </>
  );
}

export default CocktailList;
