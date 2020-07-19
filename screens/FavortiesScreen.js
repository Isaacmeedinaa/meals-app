import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavortiesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>FavortiesScreen.js</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavortiesScreen;
