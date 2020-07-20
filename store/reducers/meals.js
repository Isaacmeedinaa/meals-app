import { MEALS } from "../../data/dummy-data";

const initalState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducers = (state = initalState, action) => {
  return state;
};

export default mealsReducers;
