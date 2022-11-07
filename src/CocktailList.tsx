import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Cocktail {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface CocktailsResponse {
  drinks: Cocktail[];
}

export default function CocktailList() {
  const [cocktails, setCocktails] = useState<CocktailsResponse>();
  const fetchCocktails = async () => {
    const res = await window.fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
    );

    setCocktails(await res.json());
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cocktails are great 🍸</h1>
      </header>
      <main>
        <table className="Table">
          <thead>
            <tr>
              <th>Cocktail ID</th>
              <th>Cocktail Image</th>
              <th>Cocktail Name</th>
              <th>Link to Cocktail</th>
            </tr>
          </thead>
          <tbody>
            {cocktails &&
              cocktails.drinks.map((cocktail: Cocktail) => (
                <tr key={cocktail.idDrink}>
                  <td>{cocktail.idDrink}</td>
                  <td>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.idDrink} />
                  </td>
                  <td>BEER!</td>
                  <td>
                    <Link to={`/cocktail/${cocktail.idDrink}`}>Click Here</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
