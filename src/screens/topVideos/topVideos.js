import React from "react";
import { View, StyleSheet, ScrollView, Text, TouchableOpacity  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { VideoCard, CustomHeader } from "../../components";
import { FontAwesome5 } from "@expo/vector-icons";


class ScreenTwo extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <CustomHeader />
        <ScrollView style={styles.scrollView}>
          <View style={styles.main_view}>
          <View style={styles.text_View}>
              <View>
                <Text style={styles.text1}>Call Of Duty</Text>
                <Text style={styles.text}>Searching for videos</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7}>

              <View style={styles.search}>
                <Text style={styles.text1}>
                  <FontAwesome5 name="search" size={24} color="white" />
                </Text>
              </View>
              </TouchableOpacity>
            </View>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  search: {
    backgroundColor: "#7301c5",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 3
  },
  text: {
    color: "white",
  },
  text_View: {
    marginLeft: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginVertical: 20,
  },
  text1: {
    color: "white",
    fontSize: 22,
  },
  main_view: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollView: {
    flex: 1,
  },
});

export default ScreenTwo;
