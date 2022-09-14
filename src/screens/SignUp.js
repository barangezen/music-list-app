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

export const SignUp = ({ navigation }) => {
  const [registerInfo, setRegisterInfo] = useState({
    userMail: null,
    userPassword: null,
  });
  const [confirmedPassword, setConfirmedPassword] = useState();
  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(
        registerInfo.userMail,
        registerInfo.userPassword
      )
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
              value={registerInfo.userMail}
              onChangeText={(text) =>
                setRegisterInfo({ ...registerInfo, userMail: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={"white"}
              onChangeText={(text) =>
                setRegisterInfo({ ...registerInfo, userPassword: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={"white"}
              value={confirmedPassword}
              onChangeText={(text) => setConfirmedPassword(text)}
            />
          </View>
          <CustomButton
            title={"Register"}
            buttonContainerStyle={[styles.buttonContainer]}
            buttonTextStyle={styles.buttonText}
            onPress={handleSignUp}
            isDisabled={registerInfo.userPassword === confirmedPassword ? false : true}
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
  buttonContainer: {
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
