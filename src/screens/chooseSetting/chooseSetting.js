import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import {CustomHeader, ChooseSettingsCard} from '../../components'
import { LinearGradient } from "expo-linear-gradient";

class ChooseSttings extends React.Component {
  render() {
    return (
        <LinearGradient
        style={{ flex: 1 }}
        colors={["#0E121B", "#0E121B", "#0E121B"]}
      >
        <>
<ScrollView>

      <View style={styles.main_view}>
          <CustomHeader/>
        <ChooseSettingsCard/>
        <ChooseSettingsCard/>
        <ChooseSettingsCard/>

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
 
  },
});
export default ChooseSttings;
