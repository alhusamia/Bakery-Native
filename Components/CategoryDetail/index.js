import React, { Component } from "react";
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content,
} from "native-base";
import { ImageBackground } from "react-native";
import { connect } from "react-redux";

import { addItemToCart, getProducts } from "../../redux/actions";
import Product from "./Product";

// Style
import styles from "./styles";

class CoffeeDetail extends Component {
  state = {
    drink: "",
    option: "",
  };
  componentDidMount() {
    this.props.getProducts(this.props.route.params.category.id);
  }
  componentDidUpdate(prevProps) {
    let categoryID = this.props.route.params.category.id;

    if (categoryID !== prevProps.route.params.category.id) {
      this.props.getProducts(this.props.route.params.category.id);
    }
  }
  render() {
    const { category } = this.props.route.params;
    const { products } = this.props;
    const product = products.map((product) => (
      <Product key={product.name} product={product} />
    ));

    return (
      <Content>
        <List>
          <List>{product}</List>
          <Button
            full
            danger
            onPress={() => this.props.addItemToCart(this.state)}
          >
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}
const mapStateToProps = ({ products }) => ({
  products,
});
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  getProducts: (id) => dispatch(getProducts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeDetail);
