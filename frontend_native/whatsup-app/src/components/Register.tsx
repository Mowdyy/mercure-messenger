import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import styles from "./Style";

import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        //@ts-ignore
        style={styles.image}
        source={require("../../assets/whatsup-icon.png")}
      />
      <StatusBar style="auto" />
      <Text style={styles.registerTitle}>Create an account</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First name"
          placeholderTextColor="#003f5c"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last name"
          placeholderTextColor="#003f5c"
          onChangeText={(lastName) => setLastName(lastName)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
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
        You have an account ? :
        <TouchableOpacity>
          <Text style={styles.registerBtn}> Sign in</Text>
        </TouchableOpacity>
      </Text>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Create an ccount</Text>
      </TouchableOpacity>
    </View>
  );
}
