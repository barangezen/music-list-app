import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from "react-native";
import AppBackground from "../assets/Patikaspoti.png";
import { CustomButton } from "../components/CustomButton";
import auth from "@react-native-firebase/auth";

const windowWidth = Dimensions.get("window").width;

export const SignIn = ({ navigation }) => {
  const [loginInfo, setLoginInfo] = useState({
    loginEmail: null,
    loginPassword: null,
  });
  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(loginInfo.loginEmail, loginInfo.loginPassword)
      .then(() => navigation.navigate("MainScreens", { screen: "Home" }))
      .catch((err) => console.log(err));
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={AppBackground} style={styles.background}>
        <View style={styles.loginContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={"white"}
              value={loginInfo.loginEmail}
              onChangeText={(text) =>
                setLoginInfo({ ...loginInfo, loginEmail: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={"white"}
              value={loginInfo.loginPassword}
              onChangeText={(text) =>
                setLoginInfo({ ...loginInfo, loginPassword: text })
              }
            />
          </View>
          <CustomButton
            title={"Login"}
            buttonContainerStyle={styles.loginButtonContainer}
            buttonTextStyle={styles.buttonText}
            onPress={handleSignIn}
          />
          <Text style={styles.registerText}>Don't have an account?</Text>
          <CustomButton
            title={"Register For Patikaspoti"}
            buttonContainerStyle={styles.registerButtonContainer}
            buttonTextStyle={styles.buttonText}
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    width: windowWidth - 2,
  },
  input: {
    width: "90%",
    height: 60,
    backgroundColor: "rgba(180, 180, 180, 0.3)",
    padding: 20,
    marginBottom: 30,
    fontSize: 20,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 50,
    fontWeight: "bold",
  },
  registerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    top: 60,
    marginBottom: 80,
  },
  loginButtonContainer: {
    height: 60,
    width: windowWidth - 200,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    top: 10,
  },
  registerButtonContainer: {
    height: 60,
    width: windowWidth - 100,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
