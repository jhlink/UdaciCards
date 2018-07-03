import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const TextButton = ({ disabled, children, onPress, style = {} }) => {
  return (
    <TouchableOpacity
      onPress={ onPress }
      disabled={ disabled }>
      <Text style={[styles.btn, style]}>{ children }</Text> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    textAlign: 'center',
    fontSize: 24,
    margin: 5,
    width: 150,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 8,
    borderWidth: 2,
  }
});

export default TextButton;
