import React from "react";
import { useParams } from "react-router-dom";

// The cocktail api is available at this url:
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={cocktailId}
// You need to replace the cocktailId with the id of the cocktail.

// The cocktail api returns data in this shape.
interface SingleCocktailResponse {
  drinks: [
    {
      idDrink: string;
      strDrink: string;
      strTags: string;
      strCategory: string;
      strIBA: string;
      strAlcoholic: string;
      strGlass: string;
      strInstructions: string;
      strDrinkThumb: string;
      strImageSource: string;
    }
  ];
}

export default function Cocktail() {
  const { cocktailId } = useParams<{ cocktailId: string }>();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cocktails are great 🍸</h1>
      </header>
      <main>Cocktail id: {cocktailId}</main>
    </div>
  );
}
