import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CategoryList from "../../Components/CategoryList";
import CategoryDetail from "../../Components/CategoryDetail";

// Screens
import { CATEGORIES, CATEGORY } from "../screenNames";

// Config
import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

export default function ShopStack() {
  return (
    <Navigator initialRouteName={CATEGORIES} screenOptions={screenOptions}>
      <Screen name={CATEGORIES} component={CategoryList} />
      <Screen
        name={CATEGORY}
        component={CategoryDetail}
        options={({ route }) => ({ title: route.params.category.name })}
      />
    </Navigator>
  );
}
