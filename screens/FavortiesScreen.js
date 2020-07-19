import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import CustomHeaderButton from "../components/CustomHeaderButton";

import { MEALS } from "../data/dummy-data";

const FavortiesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavortiesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "My Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavortiesScreen;
