import React from "react";
import {} from "native-base";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

class PaperCards extends React.Component {
  render() {
    return (
      <LinearGradient
        style={{ flex: 1 }}
        colors={["#1D2434", "#1A2333", "#0E121B"]}
      >
        <>
          <View>
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={{
                  uri:
                    "https://media-cdn.tripadvisor.com/media/photo-s/19/e3/d1/51/holland-casino-valkenburg.jpg",
                }}
              />
              <Text style={styles.title}>Latest Video</Text>
              <Text style={styles.info}>
                Deal 5000 damage to enemies with grenades
              </Text>
              <View style={styles.gradientContainer}>
                <LinearGradient
                  start={[1, 0.1]}
                  colors={["#0b0b17", "#373e57"]}
                  style={styles.gradient}
                >
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext}>
                      Upvote <Text style={styles.tex}> +100</Text>
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
                <Text style={styles.twitch}>Twitch.tv/SeeVision</Text>
              </View>
            </View>
          </View>
        </>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    width: 360,
    height: 300,
    backgroundColor: "#1D2434",
    color: "white",
  },
  twitch: {
    color: "silver",
  },
  tex: {
    fontStyle: "normal",
    fontSize: 13,
  },
  image: {
    width: 350,
    height: 150,
  },
  text1: {
    color: "white",
    fontSize: 22,
  },
  text: {
    color: "white",
  },
  text_View: {
    marginLeft: 20,
    marginBottom: 20,
  },

  title: {
    color: "white",
    fontSize: 18,
    paddingVertical: 8,
  },
  info: {
    color: "silver",
    borderBottomWidth: 1,
    borderBottomColor: "#262d42",
    paddingVertical: 10,
  },
  gradientContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  gradient: {
    alignItems: "center",
    borderRadius: 100,
  },
  btn: {
    width: 150,
    padding: 5,
    borderRadius: 20,
    // marginTop: 5,
    paddingVertical: 4,
  },
  btntext: {
    textAlign: "center",
    justifyContent: "center",
    color: "silver",
    fontWeight: "bold",
    fontSize: 15,
    fontStyle: "italic",
  },
});
export default PaperCards;
