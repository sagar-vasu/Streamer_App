import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DrawerMenu from "./menu";

export default class MyDrawer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bgContainer}>
          <TouchableOpacity>
            <View style={styles.userNombre}>
              <Text style={styles.userTitulo}>B</Text>
            </View>
          </TouchableOpacity>
        </View>
        <DrawerMenu
          titleName="Search For Streamer"
          navigation={() => this.props.navigation.navigate("HomeScreen")}
        />
        <DrawerMenu
          titleName="Become famous"
          navigation={() => this.props.navigation.navigate("BecomeFamous")}
        />
        <DrawerMenu
          titleName="Top Videos"
          navigation={() => this.props.navigation.navigate("TopVideo")}
        />
        <DrawerMenu
          titleName="Create Profile"
          navigation={() => this.props.navigation.navigate("CreateProfile")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#253045",
    flex: 1,
  },

  bgContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#A0A0A0",
    backgroundColor: "#262e39",
  },

  userContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  camaraContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  userNombre: {
    marginVertical: 10,
    backgroundColor: "#262e39",
  },

  userTitulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    fontStyle: "italic",
    marginHorizontal: 12,
    borderWidth: 2,
    width: 45,
    borderRadius: 100,
    color: "#fff",
    borderColor: "#293243",
    backgroundColor: "#252d3d",
  },
});
