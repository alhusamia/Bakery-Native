import React, { Component } from "react";
import { Text, List, Button } from "native-base";
import { connect } from "react-redux";

// Component
import CartItem from "./CartItem";

import { checkoutCart } from "../../redux/actions";
import { USER, LOGIN } from "../../Navigation/screenNames";

const BekeryCart = ({ cart, user, checkoutCart, navigation }) => {
  const cartItems = cart.map((item) => (
    <CartItem item={item} key={item.type + item.option} />
  ));

  return (
    <List>
      {cartItems.length ? (
        <>
          {cartItems}
          <Button
            full
            danger
            onPress={
              user
                ? () => checkoutCart({ items: cart })
                : () => navigation.navigate(USER, { screen: LOGIN })
            }
          >
            <Text>{user ? "Checkout" : "Login to Checkout"}</Text>
          </Button>
        </>
      ) : (
        <Text
          style={{
            color: "#DAA520",
            fontSize: 30,
            marginTop: 200,
            fontWeight: "bold",
            opacity: 1,
            textAlign: "center",

            textShadowColor: "#FFD700",
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 8,
          }}
        >
          Happy to See you Again
        </Text>
      )}
    </List>
  );
};

const mapStateToProps = ({ cart, user }) => ({
  cart,
  user,
});

const mapDispatchToProps = { checkoutCart };

export default connect(mapStateToProps, mapDispatchToProps)(BekeryCart);
