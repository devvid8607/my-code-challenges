import React, { useEffect, useState } from "react";
import { Row, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";

function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState();

  const fetchCocktail = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCocktail();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    return (
      <>
        <h1 class="mt-2">Detail</h1>
        <Row me={5} md={2} xs={1} lg={3} style={{ marginLeft: 650 }}>
          <Stack direction="horizontal" gap={3}>
            <div>
              <img
                src={cocktail.image}
                alt={cocktail.name}
                style={{ width: 150, height: 150 }}
              />
            </div>
            <div>
              <Stack>
                <div>{cocktail.name}</div>
                <div>{cocktail.category}</div>
                <div>{cocktail.info}</div>
                <div>{cocktail.glass}</div>
              </Stack>
            </div>
          </Stack>
        </Row>
      </>
    );
  }
}

export default SingleCocktail;
