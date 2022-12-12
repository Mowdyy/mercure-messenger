import React from "react";
import styles from "./Style";

import { Text, View, Image } from "react-native";

export default function User(user: any) {
  return (
    <View style={styles.HomeContainer}>
      <Image
        //@ts-ignore
        style={styles.image}
        source={require("../../assets/whatsup-icon.png")}
      />
      <Text>User name</Text>
    </View>
  );
}
