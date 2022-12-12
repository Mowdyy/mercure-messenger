import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default function FormInput(props) {
  return (
    <Text style={[styles.bubble, props.owner ? styles.ownerBubble : styles.notOwnerBubble]}>{props.text}</Text>
  );
}

const styles = StyleSheet.create({
  bubble: {
    marginTop: 5,
    marginBottom: 10,
    alignSelf: true ? 'flex-start' : 'flex-end',
    maxWidth: width / 1.5,
    overflow: 'hidden',
    borderRadius: 16,
    padding: 13
  },
  ownerBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#eee',
  },
  notOwnerBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#90EE90',

  }
});