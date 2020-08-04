import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

class Card extends React.Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.props.onPress}
        style={styles.container}
      >
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.logo}
              source={{
                uri:
                  "https://cdn3.vectorstock.com/i/1000x1000/61/62/sarcastic-smile-on-cartoon-man-face-vector-24516162.jpg",
              }}
            />
            <View style={styles.title}>
              <Text style={styles.text1}>{this.props.name}</Text>
              <Text style={styles.text}>{this.props.info}</Text>
            </View>
          </View>

          <View style={styles.btn_View}>
            <View style={styles.btn_View2}>
              <View style={styles.btn_View3}>
                <MaterialCommunityIcons name="fan" size={24} color="#6e0abf" />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={styles.text}>Categories: Battle, Royal</Text>
          <Text style={styles.text}>Funny:Outgoing:Exciting</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flexDirection: "column",
    borderWidth: 1,
    padding: 17,
    width: "90%",
    backgroundColor: "#2d3642",
    borderColor: "#192130",
    borderRadius: 20,
    elevation: 5,
    marginVertical: 6,
  },
  title: {
    marginHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  main: {
    flexDirection: "column",
  },
  logo: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
  btn_View: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#2d3642",
    elevation: 5,
    borderColor: "#253045",
  },
  btn_View2: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#2d3642",
    elevation: 5,
    borderColor: "#253045",
  },
  btn_View3: {
    borderWidth: 1,
    padding: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#2d3642",
    elevation: 5,
    borderColor: "#253045",
    paddingHorizontal: 7,
  },
  text: {
    fontSize: 12,
    color: "silver",
  },
  text1: {
    color: "silver",
    fontSize: 18,
  },
});

export default Card;
