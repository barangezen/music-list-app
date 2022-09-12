import React from "react";
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

const windowWidth = Dimensions.get("window").width;

export const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={AppBackground} style={styles.background}>
        <View style={styles.loginContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={"white"}
            />
            <TextInput
              style={styles.input}
              placeholder="User Name"
              placeholderTextColor={"white"}
            />
             <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={"white"}
            />
             <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={"white"}
            />
          </View>
          <CustomButton
            title={"Register"}
            buttonContainerStyle={styles.buttonContainer}
            buttonTextStyle={styles.buttonText}
            onPress={() => navigation.navigate('MainScreens', {screen: 'Home'})}
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
    top: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
