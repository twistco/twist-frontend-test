import CocktailList, { CocktailsResponse } from "./CocktailList";
import { render, screen } from "@testing-library/react";
import fetchMock from "fetch-mock";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

const MOCK_COCKTAILS_RESPONSE: CocktailsResponse = {
  drinks: [
    {
      idDrink: "22",
      strDrink: "some drink",
      strDrinkThumb: "drink-image",
    },
  ],
};

describe("<CocktailList/>", () => {
  beforeEach(() => {
    fetchMock.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass",
      JSON.stringify(MOCK_COCKTAILS_RESPONSE)
    );
  });

  afterEach(() => {
    fetchMock.restore();
    // fetchMock.dontMock();
    // jest.resetAllMocks();
  });

  it("should render the id of the cocktail", async () => {
    act(() => {
      render(
        <MemoryRouter>
          <CocktailList />
        </MemoryRouter>
      );
    });

    const cocktailId = MOCK_COCKTAILS_RESPONSE.drinks[0].idDrink;
    await screen.findByText(cocktailId);
  });

  it("should render the image of the cocktail", async () => {
    render(
      <MemoryRouter>
        <CocktailList />
      </MemoryRouter>
    );

    const cocktailId = MOCK_COCKTAILS_RESPONSE.drinks[0].idDrink;
    const cocktailImgUrl = MOCK_COCKTAILS_RESPONSE.drinks[0].strDrinkThumb;

    const imgEl = await screen.findByAltText(cocktailId);
    expect(imgEl).toHaveAttribute("src", cocktailImgUrl);
  });

  it("should render the name of the cocktail", async () => {
    render(
      <MemoryRouter>
        <CocktailList />
      </MemoryRouter>
    );

    const cocktailName = MOCK_COCKTAILS_RESPONSE.drinks[0].strDrink;

    await screen.findByText(cocktailName);
  });
});
