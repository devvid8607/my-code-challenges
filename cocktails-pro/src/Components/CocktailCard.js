import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CocktailCard({ item }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.glass}</Card.Text>
        {/* <Card.Text>{item.info}</Card.Text> */}
        <Link to={`/cocktail/${item.id}`} className="btn btn-primary">
          Details
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CocktailCard;
