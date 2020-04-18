import React, { Component } from "react";
import { Text, View, List, CardItem, Card, ListItem } from "native-base";
import { connect } from "react-redux";

import { getProfile } from "../../redux/actions";

// Components
import LogoutButton from "./LogoutButton";

import styles from "./styles";
import { render } from "react-dom";
const OrderItem = ({ order }) => {
  return (
    <ListItem style={styles.listitem}>
      <Card style={styles.transparent}>
        <CardItem style={styles.transparent}>
          <Text style={styles.text}>{order.date.toString()}</Text>
        </CardItem>
      </Card>
    </ListItem>
  );
};

class Profile extends Component {
  componentDidMount() {
    if (this.props.user === null) return;
    this.props.getProfile(this.props.user.user_id);
  }

  render() {
    // const orderList = orders.map((order) => (
    //   <OrderItem key={order.date.toString()} order={order} />
    // ));
    const { user, order, profile } = this.props;

    return (
      <View>
        <Text> {user?.username}'s Order History</Text>
        <Text> {profile.dob}</Text>
        <Text> {profile.mobile}</Text>
        <Text> {profile.address}</Text>
        {/* <List>{orderList}</List> */}
        <LogoutButton />
      </View>
    );
  }
}

const mapStateToProps = ({ user, orders, profile }) => ({
  // username: user?.username,
  user,
  orders,
  profile,
});

const mapDispatchToProps = { getProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
