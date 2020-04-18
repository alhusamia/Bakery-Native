import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { ListItem, Text, Body } from "native-base";

// Screens
import { PRODUCT } from "../../Navigation/screenNames";

// Style
import styles from "./styles";

class Product extends Component {
  render() {
    const { product, navigation } = this.props;

    return (
      <ImageBackground
        source={{ uri: product.image }}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <ListItem
          button
          style={styles.listitem}
          onPress={() => navigation.navigate(PRODUCT, { product })}
        >
          <Body>
            <Text style={styles.text}>{product.name}</Text>
          </Body>
        </ListItem>
      </ImageBackground>
    );
  }
}

export default Product;
