import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Screens
import { CATEGORY } from "../../Navigation/screenNames";


// Style
import styles from "./styles";


class CategoryItem extends Component {
  render() {
    const { category, navigation } = this.props;

    return (
      <ImageBackground
        source={{ uri: category.image }}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <ListItem
          button
          style={styles.listitem}
          onPress={() => navigation.navigate(CATEGORY, { category })}
        >
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Text style={styles.text}>{category.title}</Text>
              </Left>
            </CardItem>
          </Card>
        </ListItem>
      </ImageBackground>
    );
  }
}

export default CategoryItem;
