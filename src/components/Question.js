import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { red } from '../utils/colors';

const Question = ({ promptText, questionState, onPress, style = {} }) => {
  const buttonText = questionState ? 'Question' : 'Answer';

  return (
    <CenterView>
      <QuestionPrompt>
        { promptText } 
      </QuestionPrompt>
      <TouchableOpacity
        onPress={ onPress }>
        <Text style={[styles.btn, style]}> { buttonText  }  </Text> 
      </TouchableOpacity>
    </CenterView>
  );
};

const CenterView = styled.View`
  align-items: center;
  justify-content: space-between;
`;

const QuestionPrompt = styled.Text`
  fontSize: 32;
  textAlign: center;
`;

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
