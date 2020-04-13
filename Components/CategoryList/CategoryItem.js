import React from "react";
import { ImageBackground, View } from "react-native";
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Screens
import { CATEGORY } from "../../Navigation/screenNames";

// Style
import styles from "./styles";

const CategoryItem = ({ category, navigation }) => (
  <ImageBackground
    source={{ uri: category.background }} 
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
            <Thumbnail
              bordered
              source={{ uri: category.img }}
              style={styles.thumbnail}
            />
            <Text style={styles.text}>{category.name}</Text>
            <Text note style={styles.text}>
              {category.distance}
            </Text>
          </Left>
        </CardItem>
      </Card>
    </ListItem>
  </ImageBackground>
);

export default CategoryItem;
