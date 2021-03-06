import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { Button, Right } from "native-base";

import { addItemToCart } from "../../redux/actions";
import { connect } from "react-redux";

import styles from "./styles";

class ProductDetail extends React.Component {
  render() {
    const { product } = this.props.route.params;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View>
            <TouchableHighlight>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: product.image }} />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.Container}>
          <Text style={styles.infoName}>{product.name}</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoDescription}>{product.description}</Text>
          </View>
          <Text style={styles.infoDescription}>{product.price} JD</Text>
          <Right>
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
        </View>
      </ScrollView>
    );
  }
}
const mapDispatchToProps = { addItemToCart };
export default connect(null, mapDispatchToProps)(ProductDetail);
