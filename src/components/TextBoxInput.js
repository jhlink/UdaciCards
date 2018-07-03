import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { gray } from '../utils/colors';

const TextBoxInput = ({ value, placeholderText, onChangeText, style = {} }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      onChangeText={ onChangeText }
      editable={ true }
      maxLength={ 70 }
      placeholder={ placeholderText }
      placeholderColor={ gray }
      value={ value }
    />
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign: 'left',
    fontSize: 14,
    width: 250,
    marginTop: 25,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    borderWidth: 2,
  }
});

export default TextBoxInput;
