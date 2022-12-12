import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import styles from "./Style";
import { userContext } from "../Context/UserContext";
import { AsyncStorage } from "react-native";

import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import useGetJWT from "../Hook/useGetJWT";

export default function Login(props: any) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [setUser] = useContext(userContext);

  const getJWT = useGetJWT();

  const storeUserToken = async (token: any) => {
    try {
      await AsyncStorage.setItem("@MyApp:userToken", token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    getJWT(username, password).then((data) => {
      if (data.JWT) {
        storeUserToken(data.JWT);
        //@ts-ignore
        setUser(data.JWT);

        props.navigator.navigate("HomeScreen");
      } else {
        // console.log(data);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/whatsup-icon.png")}
      />
      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      {/* Rediriger vers la page d'inscription */}

      <Text style={styles.register}>
        Don't have an account yet? :
        <TouchableOpacity>
          <Text style={styles.registerBtn}> Create an account</Text>
        </TouchableOpacity>
      </Text>

      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
