import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import {
  ProfileInput,
  CreateProfileHeader,
  UploadVideo,
} from "../../components";
import { LinearGradient } from "expo-linear-gradient";

class CreateProfile extends React.Component {
  render() {
    return (
      <LinearGradient
        start={[1, 0.1]}
        colors={["#262d42", "#373e57"]}
        style={styles.gradient}
      >
        <>
          <CreateProfileHeader name="Create and Update Profile" />
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.main_view}>
                <Text style={styles.title}>Profile Image</Text>
                <View style={styles.plusContainer}>
                  <Text style={styles.plus}>+</Text>
                </View>
              </View>
              <ProfileInput title="User name" placeholder="Enter URL" />
              <ProfileInput title="Stream link" placeholder="Enter URL" />
              <ProfileInput
                title="Reasons to watch"
                word="25 words"
                placeholder="Enter Text"
              />
              <UploadVideo />
            </View>
            <View style={styles.bottom_input}>
              <ProfileInput
                title="Gaming Info"
                word="25 words"
                placeholder="Enter Text"
              />
            </View>
          </ScrollView>
        </>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  main_view: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "silver",
    marginTop: 10,
  },
  plusContainer: {
    color: "#313846",
    borderRadius: 100,
    backgroundColor: "grey",
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    alignSelf: "center",
    width: 120,
    height: 120,
  },
  plus: {
    fontSize: 80,
  },

  text: {
    fontSize: 15,
    color: "silver",
  },
  bottom_input: {
    marginTop: -50,
    marginBottom: 150,
  },
});

export default CreateProfile;
