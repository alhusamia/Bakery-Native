import React, { Component } from "react";
import { List, Content } from "native-base";

import { connect } from "react-redux";

import { getAllProducts } from "../../redux/actions";
import Product from "../Product/Product";

class CategoryDetail extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }
  render() {
    const { category } = this.props.route.params;
    const { navigation, allproducts } = this.props;
    const listProducts = allproducts.filter((product) => {
      if (category.id == product.category) return product;
    });

    const product = listProducts.map((product) => (
      <Product
        key={product.name + product.id}
        product={product}
        navigation={navigation}
      />
    ));

    return (
      <Content>
        <List>{product}</List>
      </Content>
    );
  }
}
const mapStateToProps = ({ allproducts }) => ({
  allproducts,
});
const mapDispatchToProps = { getAllProducts };

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);
