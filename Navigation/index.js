import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Components
import CartIcon from "./CartIcon";

// Screens
import { SHOP, CART, USER, WELCOME } from "./screenNames";
import UserStack from "./StackNavigators/UserStack";
import CartStack from "./StackNavigators/CartStack";
import ShopStack from "./StackNavigators/ShopStack";
import Welcome from "../Components/Welcome";

const { Navigator, Screen } = createBottomTabNavigator();

function RootTabNavigator() {
  return (
    <Navigator
      // style={{uri:back}}
      initialRouteName={WELCOME}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#FFD700",
        inactiveTintColor: "white",
        style: {
          backgroundColor: "black",
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = "";
          switch (route.name) {
            case USER:
              iconName = "account";
              break;

            case SHOP:
              iconName = "store";
              break;

            default:
              return <CartIcon color={color} />;
          }
          return (
            <Icon
              name={iconName}
              type="MaterialCommunityIcons"
              style={{ color }}
            />
          );
        },
      })}
    >
      <Screen name={USER} component={UserStack} />
      <Screen name={WELCOME} component={Welcome} />
      <Screen name={SHOP} component={ShopStack} />
      <Screen name={CART} component={CartStack} />
    </Navigator>
  );
}

export default RootTabNavigator;
