import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  Image,
} from "react-native";

const screenWidth = Dimensions.get("screen").width;

class GoogleButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={this.props.onPress}
      >
        <Image style={styles.logo} source={require("../../images/g.png")} />
        <Text style={styles.text}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#121318",
    width: screenWidth - 20,
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 15,
    marginLeft: 60,
  },
  logo: {
    width: 20,
    height: 20,
  },
});

export default GoogleButton;
