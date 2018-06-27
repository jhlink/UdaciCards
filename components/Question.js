import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { red } from '../utils/colors';

const CenterView = styled.View`
  align-items: center;
  justify-content: space-between;
`;

const QuestionPrompt = styled.Text`
  fontSize: 32;
  textAlign: center;
`;

const Question = ({ promptText, answerText, onPress, style = {} }) => {
  return (
    <CenterView>
      <QuestionPrompt>
        { promptText } 
      </QuestionPrompt>
      <TouchableOpacity
        onPress={null}>
        <Text style={[styles.btn, style]}> Answer </Text> 
      </TouchableOpacity>
    </CenterView>
  );
};

const styles = StyleSheet.create({
  btn: {
    textAlign: 'center',
    fontSize: 18,
    margin: 5,
    width: 150,
    padding: 10,
    borderRadius: 8,
    color: red
  }
});

export default Question;
