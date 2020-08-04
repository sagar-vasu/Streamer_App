"use-strict";

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Screen = Dimensions.get("screen").width;
const DetailHeader = (props) => {
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
      <LinearGradient start={[1, 0.1]} colors={["#0E1824", "#2C3342"]}>
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
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <View style={styles.line}></View>

            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
              }}
            >
              <View style={styles.headingInfo}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.info}>{props.info}</Text>
                <View style={styles.starContainer}>
                  {props.star ? (
                    <>
                      <View style={styles.icon}>
                        <AntDesign name="star" color="white" size={15} />
                      </View>
                      <Text style={styles.star}>{props.star}</Text>
                    </>
                  ) : null}
                </View>
              </View>
              <Image
                style={{
                  width: 95,
                  borderRadius: 100,
                  height: 95,
                  marginTop: 10,
                }}
                source={{
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpaLPBNp3xbzdZXizN6QWv5R8PyZaG6Tg81g&usqp=CAU",
                }}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  userNombre: {
    marginVertical: 10,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
    height: 110,
  },

  userTitulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    fontStyle: "italic",
    marginHorizontal: 5,
    borderWidth: 2,
    width: 45,
    borderRadius: 100,
    color: "#fff",
    borderColor: "#293243",
    backgroundColor: "#252d3d",
    opacity: 0.7,
  },

  headingInfo: {
    margin: 10,
  },

  name: {
    fontSize: 20,
    color: "silver",
  },
  info: {
    fontSize: 15,
    color: "#4282cb",
  },
  icon: {
    backgroundColor: "#7301c5",
    borderRadius: 100,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  starContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  star: {
    marginLeft: 5,
    color: "grey",
    marginTop: 2,
  },

  line: {
    zIndex: 0,
    position: "absolute",
    borderWidth: 3,
    borderColor: "#7301c5",
    marginTop: 80,
    right: 23,
    width: Screen,
    top: 13,
  },
});

export default DetailHeader;
