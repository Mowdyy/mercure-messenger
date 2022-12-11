import React from 'react';
import { StyleSheet, View, Dimensions, TextInput, Pressable, Text } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default function FormInput() {
  return (
    <View style={styles.container}>
      <TextInput
        label='Saisissez votre message...'
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    width: width / 1.1,
    height: height / 15,
    backgroundColor: '#eee',
    borderRadius: 16,
    padding: 10
  },
  button: {
    backgroundColor: '#90EE90',
    padding: 10,
    borderRadius: 16
  }
});