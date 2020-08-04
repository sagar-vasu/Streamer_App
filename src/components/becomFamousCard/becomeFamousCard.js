import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class BecomeFamousCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Top 50</Text>
        <View>
          <Text style={styles.price}>SUB</Text>
          <Text style={[styles.month, { fontSize: 60 }]}>$12/mo</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.name}>PAY NOW!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: 5,
    padding: 20,
  },
  title: {
    color: "white",
    marginTop: 10,
  },

  price: {
    fontSize: 80,
    alignSelf: "center",
    color: "#3E4B5C",
  },

  month: {
    color: "#354255",
    alignSelf: "center",
  },
  button: {
    borderRadius: 7,
    padding: 17,
    backgroundColor: "#3E4B5C",
    marginTop: 20,
  },
  name: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default BecomeFamousCard;
