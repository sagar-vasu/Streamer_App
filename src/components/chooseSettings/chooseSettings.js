import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  Image,
} from "react-native";
import { View } from "native-base";
import { CheckBox } from "../index";

const screenWidth = Dimensions.get("screen").width;

class ChooseSettingsCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showPassword: false,
      password: "",
    };
  }
  handelOne = () => {
    this.setState({
      checkOne: !this.state.checkOne,
    });
  };

  handelTwo = () => {
    this.setState({
      checkTwo: !this.state.checkTwo,
    });
  };

  handelTwo = () => {
    this.setState({
      checkTwo: !this.state.checkTwo,
    });
  };

  handelThree = () => {
    this.setState({
      checkThree: !this.state.checkThree,
    });
  };

  handelFour = () => {
    this.setState({
      checkFour: !this.state.checkFour,
    });
  };

  handelFive = () => {
    this.setState({
      checkFive: !this.state.checkFive,
    });
  };
  handelSix = () => {
    this.setState({
      checkSix: !this.state.checkSix,
    });
  };

  render() {
    return (
      <View style={styles.main_view}>
        <Text style={styles.title}>Choose three personalities</Text>
        <View style={styles.check_view}>
          <View style={styles.check}>
            <CheckBox
              color={this.state.checkOne ? "#7301c5" : "silver"}
              checked={this.state.checkOne}
              onPress={this.handelOne}
              name="option one "
              size="20"
            />
          </View>
          <View style={styles.check}>
            <CheckBox
              color={this.state.checkTwo ? "#7301c5" : "silver"}
              checked={this.state.checkTwo}
              onPress={this.handelTwo}
              name="option Two "
              size="20"
            />
          </View>

          <View style={styles.check}>
            <CheckBox
              color={this.state.checkThree ? "#7301c5" : "silver"}
              checked={this.state.checkThree}
              onPress={this.handelThree}
              name="option Three "
              size="20"
            />
          </View>

          <View style={styles.check}>
            <CheckBox
              color={this.state.checkFour ? "#7301c5" : "silver"}
              checked={this.state.checkFour}
              onPress={this.handelFour}
              name="option Four "
              size="20"
            />
          </View>

          <View style={styles.check}>
            <CheckBox
              color={this.state.checkFive ? "#7301c5" : "silver"}
              checked={this.state.checkFive}
              onPress={this.handelFive}
              name="option Five "
              size="20"
            />
          </View>

          <View style={styles.check}>
            <CheckBox
              color={this.state.checkSix ? "#7301c5" : "silver"}
              checked={this.state.checkSix}
              onPress={this.handelSix}
              name="option Six "
              size="20"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_view: {},
  check_view: {
    backgroundColor: "#1D2434",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    color: "white",
    marginVertical: 13,
  },
  check: {
    marginVertical: 4,
  },
});

export default ChooseSettingsCard;
