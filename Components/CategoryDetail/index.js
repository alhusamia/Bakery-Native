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
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/actions";

// Style
import styles from "./styles";

class CategoryDetail extends Component {
  state = {
    category: "Sandwich",
    option: "Small",
  };

  render() {
    const { category } = this.props.route.params;
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: category.img }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.category}
                onValueChange={(category) => this.setState({ category })}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={(option) => this.setState({ option })}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
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

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CategoryDetail);
