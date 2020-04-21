import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { ListItem, Text, Body, Right, Button } from "native-base";

import { addItemToCart } from "../../redux/actions";
import { connect } from "react-redux";

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
          <Right>
            <Text style={styles.text1}>{product.price}JD</Text>
            <Button
              dark
              style={styles.ItemContainer}
              onPress={() =>
                this.props.addItemToCart({
                  name: product.name,
                })
              }
            >
              <Text style={{ color: "white" }}>Add</Text>
            </Button>
          </Right>
        </ListItem>
      </ImageBackground>
    );
  }
}
const mapDispatchToProps = { addItemToCart };
export default connect(null, mapDispatchToProps)(Product);
