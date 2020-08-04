import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

class UploadVideo extends React.Component {
  render() {
    return (
      <>
        <Text style={styles.today_video}>Todays Videos</Text>
        <View style={styles.upload_view}>
          <View>
            <MaterialIcons name="cloud-upload" size={50} color="#7301c5" />
          </View>
          <Text style={styles.text}>Browser Video</Text>
          <Text style={styles.text}>From Phone</Text>

          <LinearGradient
            style={styles.btn_gradiant}
            colors={["#09121f", "#313846"]}
            start={[0.9, 2]}
          >
            <>
              <View style={styles.upload_btn}>
                <Text style={styles.upload}>Upload</Text>
              </View>
            </>
          </LinearGradient>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  main_view: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "silver",
    marginTop: 10,
  },

  upload_view: {
    alignItems: "center",
    marginVertical: 70,
    marginTop: 24,
    borderWidth: 2,
    borderColor: "#7301c5",
    borderStyle: "dotted",
    borderRadius: 1,
    position: "relative",
    padding: 20,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 15,
    color: "silver",
  },
  upload_btn: {
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 100,
    color: "#fff",
  },
  dash: {
    width: 360,
    flexDirection: "row",
    marginTop: -20,
  },
  btn_gradiant: { borderRadius: 100, marginHorizontal: 20, marginVertical: 20 },
  dash2: {
    width: 360,
    flexDirection: "row",
    marginTop: 50,
  },
  upload: {
    color: "silver",
  },

  today_video: {
    marginTop: 50,
    marginHorizontal: 20,
    color: "silver",
  },
});

export default UploadVideo;
