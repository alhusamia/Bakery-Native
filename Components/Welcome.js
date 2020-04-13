import React from "react";
import { ImageBackground, View } from "react-native";
import { Text } from "native-base";
import { SHOP } from "../Navigation/screenNames";
import bread from "../assets/bread.png";

const Welcome = ({ navigation }) => (
  <ImageBackground
    source={bread}
    style={{
      width: "100%",
      height: "100%",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <View>
      <Text
        button
        onPress={() => navigation.navigate(SHOP)}
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
          opacity: 1,
          textAlign: "center",
          fontSize: 50,
        }}
      >
        Welcome to Wake & Bake
      </Text>
    </View>
  </ImageBackground>
);

export default Welcome;
