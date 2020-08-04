import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

class ProfileInput extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title_word}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={[styles.title, { color: "gray" }]}>
            {this.props.word}
          </Text>
        </View>
        <LinearGradient
          style={{ borderRadius: 100, marginHorizontal: 10 }}
          colors={["#09121f", "#313846"]}
          start={[0.9, 2]}
        >
          <>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                placeholder={this.props.placeholder}
              />
            </View>
          </>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderLeftColor: "#7301c5",
    borderLeftWidth: 4,
    paddingHorizontal: 10,
    color: "white",
    marginVertical: 5,
  },
  title: {
    paddingHorizontal: 40,
    marginVertical: 6,
    color: "silver",
  },
  inputView: {
    paddingHorizontal: 19,
    borderRadius: 100,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  title_word: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ProfileInput;
