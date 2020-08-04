import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomHeader, BecomeFamousCard } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

class BecomeFamousScreen extends React.Component {
  render() {
    return (
      <LinearGradient
        style={{ flex: 1 }}
        colors={["#1D2434", "#1A2333", "#0E121B"]}
      >
        <>
          <CustomHeader />

          <View style={styles.container}>
            <ScrollView>
              <BecomeFamousCard />
              <BecomeFamousCard />
              <BecomeFamousCard />
              <BecomeFamousCard />
            </ScrollView>
          </View>
        </>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});

export default BecomeFamousScreen;
