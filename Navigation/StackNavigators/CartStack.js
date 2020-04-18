import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { CART } from "../screenNames";
import BekeryCart from "../../Components/BekeryCart";

// Config
import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

export default function CartStack() {
  return (
    <Navigator
      initialRouteName={CART}
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
      <Screen name={CART} component={BekeryCart} />
    </Navigator>
  );
}
