import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Screens

// Style
import styles from "./styles";

class Product extends Component {
  render() {
    const { product } = this.props;

    return (
      <ImageBackground
        source={{ uri: product.image }}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <ListItem style={styles.listitem}>
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Text style={styles.text}>{product.name }</Text>
                <Text style={styles.text}>{product.description }</Text>
                <Text style={styles.text}>{product.price + "\n"}</Text>
              </Left>
            </CardItem>
          </Card>
        </ListItem>
      </ImageBackground>
    );
  }
}

export default Product;
