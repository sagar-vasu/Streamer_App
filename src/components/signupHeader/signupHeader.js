import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

class SignupHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          style={{ height: 100 }}
          start={[1, 0.1]}
          colors={["#0E1824", "#2C3342"]}
        >
          <View style={styles.headingContainer}>
            <Text style={styles.title}>Welcome</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginVertical: 40,
    color: "silver",
  },
});
export default SignupHeader;
