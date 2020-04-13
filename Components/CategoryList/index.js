import React from "react";
import { List, Content, Spinner } from "native-base";
import { connect } from "react-redux";

// Component
import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories, loading, navigation }) => {
  if (loading) return <Spinner color="rgb(20,90,100)" />;

  const shopList = categories.map((category) => (
    <CategoryItem
      category={category}
      key={category.name}
      navigation={navigation}
    />
  ));

  return (
    <Content>
      <List>{shopList}</List>
    </Content>
  );
};

const mapStateToProps = ({ categories }) => ({
  categories,
  loading: !categories.length,
});

export default connect(mapStateToProps)(CategoryList);
