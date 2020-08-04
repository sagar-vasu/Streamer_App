import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Modal,
} from "react-native";
import { HomeCard, CustomHeader, FilterButton } from "../../components";

import { LinearGradient } from "expo-linear-gradient";
import { Button } from "native-base";

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
    };
  }
  handelMove = () => {
    this.props.navigation.navigate("Detail");
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.container}>
          <CustomHeader showModal={this.showModal} />
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>Your best match</Text>
            <Text style={styles.sec_title}>Your best match!</Text>
            <HomeCard name="Amrat" info="Developer" onPress={this.handelMove} />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />

            <Modal
              animationType={"slide"}
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                console.log("Modal has been closed.");
              }}
            >
              <View style={styles.modal}>
                <LinearGradient
                  style={{
                    flex: 1,
                    marginHorizontal: 20,
                    width: "90%",
                    marginTop: 100,
                    padding: 20,
                    borderRadius: 10,
                  }}
                  colors={["#1D2434", "#1A2333"]}
                >
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                      <Text style={styles.filterTitle}>Personality</Text>
                      <View style={styles.buttons}>
                        <FilterButton name="Funny" />
                        <FilterButton name="Exciting" />
                        <FilterButton name="Happy" />
                      </View>
                      <Text style={styles.tags}>Search Tags</Text>
                    </View>

                    <View style={styles.mainFilterContainer}>
                      <Text style={styles.filterTitle}>Categories</Text>
                      <View style={styles.buttons}>
                        <FilterButton name="Action" />
                        <FilterButton name="Shooter" />
                        <FilterButton name="RPG" />
                      </View>
                      <Text style={styles.tags}>Search Tags</Text>
                    </View>

                    <View style={styles.mainFilterContainer}>
                      <Text style={styles.filterTitle}>Videos</Text>
                      <View style={styles.buttons}>
                        <FilterButton name="CoD" />
                      </View>
                      <Text style={styles.tags}>Search Tags</Text>
                    </View>
                  </ScrollView>

                  <View style={styles.footer}>
                    <FilterButton
                      onPress={() => {
                        this.setState({
                          modalVisible: !this.state.modalVisible,
                        });
                      }}
                      width={true}
                      name="Apply"
                    />
                    <FilterButton
                      onPress={() => {
                        this.setState({
                          modalVisible: !this.state.modalVisible,
                        });
                      }}
                      width={true}
                      name="Cancel"
                    />
                  </View>
                </LinearGradient>
              </View>
            </Modal>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  title: {
    color: "silver",
    fontSize: 23,
    marginHorizontal: 22,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#192130",
  },

  scrollView: {
    flex: 1,
  },
  sec_title: {
    color: "silver",
    fontSize: 14,
    marginHorizontal: 22,
    marginBottom: 23,
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000aa",
    flex: 1,
  },

  mainFilterContainer: {
    marginTop: 30,
  },

  filterTitle: {
    color: "silver",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  tags: {
    color: "#7301c5",
    fontWeight: "bold",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
