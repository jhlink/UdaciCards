import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity
      onPress={onPress}>
      <Text style={[styles.btn, style]}>{ children }</Text> 
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    textAlign: 'center',
    margin: 5,
    padding: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 2
  }
});
