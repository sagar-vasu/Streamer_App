import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { CustomHeader, VideoCard, DetailHeader } from "../../components";
import { LinearGradient } from "expo-linear-gradient";

class SeeVision extends React.Component {
  componentDidMount() {
    let data = this.props.route.params;
    console.log(data);
  }
  render() {
    return (
      <LinearGradient
        style={{ flex: 1 }}
        colors={["#1D2434", "#1D2434", "#1D2434"]}
      >
        <>
          <DetailHeader star={"1.8k"} name={"Amrat"} info={"Developer"} />
          <ScrollView>
            <View style={styles.main_view}>
              <View style={{ borderLeftColor: "#7301c5", borderLeftWidth: 6 }}>
                <Text style={styles.heading}>Reasons to watch</Text>
                <Text style={styles.define}>
                  Profetional gamer since 2001. Won the hala C10 challange.
                  Lookiong for a streaming partner to take the word by stram
                </Text>
              </View>
              <VideoCard />
              <View style={{ borderLeftColor: "#7301c5", borderLeftWidth: 6 }}>
                <Text style={styles.heading}>Reasons to watch</Text>
                <Text style={styles.define}>
                  Profetional gamer since 2001. Won the hala C10 challange.
                  Lookiong for a streaming partner to take the word by stram
                </Text>
              </View>
            </View>
          </ScrollView>
        </>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    marginVertical: 30,
  },
  define2: {
    backgroundColor: "#0E121B",
    paddingVertical: 50,
    height: 200,
  },
  define: {
    fontSize: 15,
    color: "silver",
    marginHorizontal: 10,
    marginVertical: 10,
    textAlign: "justify",
  },
  heading: {
    fontSize: 25,
    color: "silver",
    marginHorizontal: 10,
  },
});
export default SeeVision;
