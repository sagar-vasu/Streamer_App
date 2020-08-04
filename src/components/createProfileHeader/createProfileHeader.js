import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const CreateProfileHeader = (props) => {
  const [state, setState] = useState(false);
  const navigation = useNavigation();

  const closedrawer = () => {
    setState(false);
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const opendrawer = () => {
    setState(true);
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ height: 100 }}
        start={[1, 0.1]}
        colors={["#0E1824", "#2C3342"]}
      >
        <View style={styles.headingContainer}>
          {state ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => closedrawer()}
            >
              <View style={styles.userNombre}>
                <Text style={styles.userTitulo}>B</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => opendrawer()}
            >
              <View style={styles.userNombre}>
                <Text style={styles.userTitulo}>B</Text>
              </View>
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{props.name}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
  },

  userNombre: {
    marginVertical: 10,
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
    opacity: 0.7,
  },
  title: {
    color: "white",
    fontSize: 20,
    marginVertical: 40,
    color: "silver",
    alignSelf: "center",
  },
});
export default CreateProfileHeader;
