import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import Icon from "@expo/vector-icons/Entypo";

class CustomInput extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.SectionStyle}>
          <TextInput
            onChangeText={this.props.onChangeText}
            placeholder={this.props.placeholder}
            style={{ flex: 1 }}
            underlineColorAndroid="transparent"
          />
          <Icon
            onPress={this.props.onPress}
            style={styles.icon}
            name={this.props.name}
            size={20}
            color="grey"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    color: "silver",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },

  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    paddingLeft: 10,
  },

  icon: {
    margin: 10,
  },
});

export default CustomInput;
