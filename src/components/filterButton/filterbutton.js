import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get("screen").width;

class FilterButton extends React.Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={this.props.onPress}>
        <LinearGradient
          style={[
            styles.button,
            { width: this.props.width ? screenWidth - 230 : screenWidth - 250 },
          ]}
          start={[0.8, 0.61]}
          colors={["#171d29", "#282f42"]}
        >
          <Text style={styles.text}>{this.props.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 7,
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 15,
  },
});

export default FilterButton;
