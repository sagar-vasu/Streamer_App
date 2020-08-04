import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import {
  CustomButton,
  Input,
  IconInput,
  SignupHeader,
  CheckBox,
  GoogleButton,
} from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "native-base";

class SignupScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      showPassword: false,
      password: "",
    };
  }

  handelpassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  savePassword = (e) => {
    this.setState({
      password: e,
    });
  };

  //
  handelCheckBox = () => {
    this.setState({
      check: !this.state.check,
    });
  };

  handelSubscribe = () => {
    this.setState({
      checkOne: !this.state.checkOne,
    });
  };

  goToHome = () => {
    this.props.navigation.navigate("Dashboard");
  };

  render() {
    let { showPassword, password } = this.state;
    return (
      <LinearGradient
        style={{ flex: 1 }}
        colors={["#1D2434", "#1A2333", "#0E121B"]}
      >
        <>
          <SignupHeader />
          <ScrollView>
            <View style={styles.body}>
              <View style={styles.headerInfo}>
                <Text style={styles.title}>Sign Up </Text>
                <View style={styles.loginContainer}>
                  <Text style={styles.account}>Already have an account,</Text>
                  <TouchableOpacity activeOpacity={0.7} style={styles.login}>
                    <Text style={styles.loginText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.formContainer}>
                <Input title="First Name" />
                <Input title="Email" />
                <IconInput
                  onChangeText={(e) => this.savePassword(e)}
                  onPress={this.handelpassword}
                  name={showPassword ? "eye-with-line" : "eye"}
                  title="Password"
                  value={password}
                />

                <Text style={styles.passwordText}>
                  Use 8 or more characters with a mix of letters, numbers, and
                  symbols
                </Text>
                <View>
                  <CheckBox
                    color={this.state.check ? "#7301c5" : "silver"}
                    checked={this.state.check}
                    onPress={this.handelCheckBox}
                    name="I agree to the "
                    linkName="Terms "
                    info="and"
                    privacy=" Privacy Policy"
                    
                  />
                </View>
                <View>
                  <CheckBox
                    color={this.state.checkOne ? "#7301c5" : "silver"}
                    checked={this.state.checkOne}
                    onPress={this.handelSubscribe}
                    name="Subscribe for the select product updates. "
                  />
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <CustomButton onPress={this.goToHome} name="Sign Up" />
                <Text style={styles.or}>or</Text>
                <GoogleButton name="Sign Up With Google" />
              </View>

              <View style={styles.footer}>
                <View style={styles.loginContainer}>
                  <Text style={[styles.account, { fontSize: 15 }]}>
                    Already have an account,
                  </Text>
                  <TouchableOpacity activeOpacity={0.7} style={styles.login}>
                    <Text style={[styles.loginText, { fontSize: 15 }]}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  body: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  headerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  account: {
    color: "silver",
    fontSize: 12,
    opacity: 0.7,
  },

  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  login: {
    marginLeft: 6,
  },
  loginText: {
    color: "#0A498C",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  formContainer: {
    marginVertical: 20,
  },
  passwordText: {
    color: "silver",
    fontSize: 12,
    opacity: 0.7,
    marginVertical: 10,
  },
  buttonContainer: {
    alignItems: "center",
  },
  or: {
    marginVertical: 10,
    fontSize: 16,
    color: "silver",
    opacity: 0.6,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});

export default SignupScreen;
