import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

const Chat = () => {

  return (
      <ScrollView style={styles.container}>
        <View style={styles.room}>
            <Text style={styles.name}>Justin Katasi</Text>
            <View style={styles.messageText}>
                <Text style={styles.subtitle}>Nickel mon pote</Text>
                <Text style={styles.subtitle}>à 17:47</Text>
            </View>
        </View>
      </ScrollView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    height: 100,
  },
  room: {
    backgroundColor: '#eee',
    marginBottom: 10,
    borderRadius: 16,
    padding: 20
  },
  messageText: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  subtitle: {
    color: '#636363',
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
  }
});