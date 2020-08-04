import React, { Component } from "react";

import { StyleSheet } from "react-native";
import { CheckBox, Text, View } from "native-base";
export default class CustomCheckbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CheckBox
          color={this.props.color}
          onPress={this.props.onPress}
          checked={this.props.checked}
        />
        <Text style={[styles.normalText]}>{this.props.name}</Text>
        <Text style={styles.mainText}>{this.props.linkName}</Text>
        <Text style={[styles.normalText, { marginLeft: 0 }]}>
          {this.props.info}
        </Text>
        <Text style={styles.mainText}>{this.props.privacy}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  normalText: {
    color: "silver",
    opacity: 0.6,
    marginLeft: 20,
  },
  mainText: {
    color: "white",
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
});
