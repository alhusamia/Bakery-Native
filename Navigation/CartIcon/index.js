import React from "react";
import { Icon, Text, View } from "native-base";
import { connect } from "react-redux";

// Utils
import { quantityCounter } from "../../utils";

// Styles
import styles from "./styles";

const CartButton = ({ quantity, color }) => (
  <View>
    <Icon name="shoppingcart" type="AntDesign" style={{ color }} />
    {quantity > 0 && (
      <View style={styles.badge}>
        <Text style={styles.text}>{quantity}</Text>
      </View>
    )}
  </View>
);

const mapStateToProps = ({ cart }) => ({
  quantity: quantityCounter(cart)
});

export default connect(mapStateToProps)(CartButton);
