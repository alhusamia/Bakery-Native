import React, { Component } from "react";
import { View, TouchableHighlight, Image, Text } from "react-native";

// Screens
import { CATEGORY } from "../../Navigation/screenNames";

// Style
import styles from "./styles";

class CategoryItem extends Component {
  render() {
    const { category, navigation } = this.props;

    return (
      <TouchableHighlight
        onPress={() => navigation.navigate(CATEGORY, { category })}
      >
        <View style={styles.ItemContainer}>
          <Image style={styles.Photo} source={{ uri: category.image }} />
          <Text style={styles.Name}>{category.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default CategoryItem;
