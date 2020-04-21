import React, { Component } from "react";
import { Text, View, List, CardItem, Card, ListItem } from "native-base";
import { connect } from "react-redux";

// Components
import LogoutButton from "./LogoutButton";

import styles from "./styles";
import { render } from "react-dom";

class Profile extends Component {
  render() {
    const { user } = this.props;

    return (
      <View>
        <Text> Before you go.... Promise to come back again ....</Text>

        <LogoutButton />
      </View>
    );
  }
}

const mapStateToProps = ({ user, orders, profile }) => ({
  username: user?.username,
  user,
  orders,
  profile,
});

export default connect(mapStateToProps)(Profile);
