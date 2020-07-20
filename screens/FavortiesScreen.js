import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import CustomHeaderButton from "../components/CustomHeaderButton";

const FavortiesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

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
