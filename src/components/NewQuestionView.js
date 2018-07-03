import React from 'react';
import { 
  StyleSheet, 
  KeyboardAvoidingView
} from 'react-native';
import styled from 'styled-components/native';

import TextBoxInput from './TextBoxInput';
import TextButton from './TextButton';
import { white, black } from '../utils/colors';

const CenterView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const styles = StyleSheet.create({
  strtBtn: {
    backgroundColor: black,
    color: white,
    marginTop: 50
  }, 
  questionInput: {
    marginTop: 40, 
  }
});

const NewQuestionView = ({ questionText, answerText, handleQuestionChange, handleAnswerChange, handleOnSubmit }) => {

  return (
    <CenterView behavior='padding' enabled>
      <TextBoxInput
        placeholderText="Question"  
        value={ questionText }
        onChangeText={ handleQuestionChange }
        style={ styles.questionInput }
      />
      <TextBoxInput
        placeholderText="Answer" 
        value={ answerText }
        onChangeText={ handleAnswerChange }
        style={ styles.questionInput }
      />
      <TextButton
        style={styles.strtBtn} 
        onPress={ handleOnSubmit }
      >
            Submit 
      </TextButton>
    </CenterView>
  );
};

export default NewQuestionView;
