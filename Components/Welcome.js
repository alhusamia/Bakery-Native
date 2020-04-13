import React from "react";
import { ImageBackground, View } from "react-native";
import { Text } from "native-base";
import { SHOP } from "../Navigation/screenNames";
import bread from "../assets/bread.png";

const Welcome = ({ navigation }) => (
  <ImageBackground source={bread} style={{ width: "100%", height: "100%" }}>
    <View button onPress={() => navigation.navigate(SHOP)}>
      <Text
        style={{ color: "white", fontSize: 18, fontWeight: "bold", opacity: 1 }}
      >
        Welcome to Flour Power
      </Text>
    </View>
  </ImageBackground>
);

export default Welcome;
