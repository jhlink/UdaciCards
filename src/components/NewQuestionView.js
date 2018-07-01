import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import TextBoxInput from './TextBoxInput';
import TextButton from './TextButton';
import { white, black } from '../utils/colors';

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const styles = StyleSheet.create({
  strtBtn: {
    backgroundColor: black,
    color: white,
    marginTop: 50
  }
});

const NewQuestionView = ({ questionText, answerText, handleQuestionChange, handleAnswerChange }) => {

  return (
    <CenterView>
      <TextBoxInput
        placeholderText="Question"  
        value={ questionText }
        onChangeText={ handleQuestionChange }
      />
      <TextBoxInput
        placeholderText="Answer" 
        value={ answerText }
        onChangeText={ handleAnswerChange }
      />
      <TextButton
        style={styles.strtBtn} 
        onPress={this.toDeckView}
      >
            Submit 
      </TextButton>
    </CenterView>
  );
};

export default NewQuestionView;
