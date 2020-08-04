import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Text } from "native-base";

class Input extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}
export default Input;

const styles = StyleSheet.create({
  title: {
    color: "silver",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    paddingLeft: 10,
  },
});
