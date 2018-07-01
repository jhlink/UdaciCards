import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import TextButton from './TextButton';
import Question from './Question';
import { white, green, red } from '../utils/colors';

const QuizView = ({ promptText, answerText, handleCorrectBtn, handleIncorrectBtn }) => {  
  return (
    <CenterView>
      <Question 
        onPress={ null }
        promptText={ promptText } 
        answerText={ answerText }
      />
      <ButtonView>
        <TextButton
          onPress={ handleCorrectBtn }
          style={styles.corBtn}>  
            Correct 
        </TextButton>
        <TextButton
          onPress={ handleIncorrectBtn }
          style={styles.incorBtn}>  
            Incorrect 
        </TextButton>
      </ButtonView>
    </CenterView>
  ); 
};

const CenterView = styled.View`
  align-content: center;
  justify-content: space-between;
`;

const ButtonView = styled.View`
  paddingTop: 200;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  corBtn: {
    backgroundColor: green,
    color: white,
    borderWidth: 0
  },
  incorBtn: {
    backgroundColor: red,
    color: white,
    borderWidth: 0
  }
});

export default QuizView;

