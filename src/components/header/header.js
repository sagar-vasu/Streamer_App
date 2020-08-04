import React, { useState } from "react";
import {
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
  View,
  Text,
} from "native-base";

import { StyleSheet, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomHeader = (props) => {
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
    <Header noShadow style={styles.container}>
      <Left>
        <View style={styles.header}>
          <LinearGradient
            start={[1, 0.1]}
            colors={["#262d42", "#373e57"]}
            style={styles.gradient}
          >
            {state ? (
              <Button transparent onPress={() => closedrawer()}>
                <Icon name="menu" style={styles.icon} />
              </Button>
            ) : (
              <Button transparent onPress={() => opendrawer()}>
                <Icon name="menu" style={styles.icon} />
              </Button>
            )}
          </LinearGradient>
        </View>
      </Left>

      <Body>
        <Title style={{ color: "white" }}>{props.screen}</Title>
      </Body>
      <Right>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => props.showModal()}
          style={styles.filterContainer}
        >
          <Text style={styles.filter}>Filter</Text>
        </TouchableOpacity>
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262e39",
    height: 80,
  },
  header: {
    borderColor: "#333c52",
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: "#333c52",
  },
  gradient: {
    alignItems: "center",
    borderRadius: 100,
  },
  icon: {
    fontSize: 20,
    color: "white",
  },

  filterContainer: {
    justifyContent: "center",
    flex: 1,
  },
  filter: {
    alignSelf: "flex-end",
    fontSize: 30,
    color: "white",
  },
});

export default CustomHeader;
