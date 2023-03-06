import React, { useState, useContext, useEffect, createContext } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const MyCocktailContext = createContext();

export const MyCocktailProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cocktailList, setCocktailList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("marg");

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      console.log(`${url}${searchTerm}`);
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      console.log(drinks);
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktailList(newCocktails);
      } else {
        setCocktailList([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);
  return (
    <MyCocktailContext.Provider
      value={{ loading, cocktailList, searchTerm, setSearchTerm }}
    >
      {children}
    </MyCocktailContext.Provider>
  );
};

export const useCocktailContext = () => {
  return useContext(MyCocktailContext);
};
