import React from "react";
import "./App.css";

import CocktailList from "./CocktailList";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Cocktail from "./Cocktail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CocktailList />} />
        <Route path="/cocktail/:cocktailId" element={<Cocktail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
