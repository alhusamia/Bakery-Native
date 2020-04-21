import React, { Component } from "react";
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
import { connect } from "react-redux";

import { removeItemFromCart } from "../../redux/actions";

// Style
import styles from "./styles";
import { render } from "react-dom";

class CartItem extends Component {
  render() {
    const { item, removeItemFromCart } = this.props;
    console.table(item);

    return (
      <ListItem style={styles.listStyle}>
        <Left>
          <Text>{item.name}</Text>
        </Left>
        <Body>
          <Text style={styles.quantity}>{item.quantity}</Text>
        </Body>

        <Right>
          <Button transparent onPress={() => removeItemFromCart(item)}>
            <Icon name="trash" style={styles.removeItem} />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
