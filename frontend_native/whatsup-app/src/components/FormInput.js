import React from 'react';
import { StyleSheet, View, Dimensions, TextInput, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default function FormInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: width
  },
  input: {
    backgroundColor: '#eee',
    borderRadius: 16,
    padding: 10,
    width: '70%'
  },
  button: {
    backgroundColor: '#90EE90',
    padding: 10,
    borderRadius: 16,
    marginLeft: 10,
  }
});