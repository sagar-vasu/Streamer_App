import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;

class CustomButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={this.props.onPress}
      >
        <Text style={styles.text}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#7301c5",
    width: screenWidth - 20,
    padding: 15,
    alignItems: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 15,
  },
});

export default CustomButton;
