import React from "react";
import styles from "./Style";

import { Text, View, TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <View style={styles.HomeContainer}>
      <Text style={styles.homeLogout}>
        User name :
        <TouchableOpacity>
          <Text style={styles.registerBtn}> Log out</Text>
        </TouchableOpacity>
      </Text>
      <Text style={styles.registerTitle}>Home</Text>
    </View>
  );
}
