import React from "react";
import { Icon, Image } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Components
import CartIcon from "./CartIcon";
import logo from "../assets/Logo.png";

// Screens
import { SHOP, CART, USER, SEARCH } from "./screenNames";
import UserStack from "./StackNavigators/UserStack";
import CartStack from "./StackNavigators/CartStack";
import ShopStack from "./StackNavigators/ShopStack";
import SearchStack from "./StackNavigators/SearchStack";

const { Navigator, Screen } = createBottomTabNavigator();

function RootTabNavigator() {
  return (
    <Navigator
      initialRouteName={SHOP}
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
            case SEARCH:
              iconName = "glasses";
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
      <Screen
        name={USER}
        component={UserStack}
        options={() => {
          return {
            title: "Profile",
            headerRight: () => (
              <Image source={logo} style={{ height: 30, width: 15, flex: 1 }} />
            ),
          };
        }}
      />
      <Screen name={SHOP} component={ShopStack} />
      <Screen name={SEARCH} component={SearchStack} />
      <Screen name={CART} component={CartStack} />
    </Navigator>
  );
}

export default RootTabNavigator;
