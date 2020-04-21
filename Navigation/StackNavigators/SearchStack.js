import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { SEARCHLIST } from "../screenNames";
import SearchList from "../../Components/Search/SearchList";

const { Navigator, Screen } = createStackNavigator();

export default function SearchStack() {
  return (
    <Navigator
      initialRouteName={SEARCHLIST}
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTintColor: "white",
      }}
    >
      <Screen name={SEARCHLIST} component={SearchList} />
    </Navigator>
  );
}
