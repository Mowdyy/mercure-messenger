import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import FormInput from '../components/FormInput';
import Bubble from '../components/Bubble';

const Chat = () => {

  return (
      <View style={styles.container}>
        <View>
            <Bubble owner text="Slt" />
            <Bubble owner text="Ca dit quoi ?" />
            <Bubble text="Hello, ça va et toi ?" />
            <Bubble owner text="Nickel mec" />
        </View>
        <View style={styles.submit}>
            <FormInput />
        </View>
      </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    height: 100,
  },
  submit: {
    marginBottom: 0
  }
});
