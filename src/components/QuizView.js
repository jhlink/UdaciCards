import React from 'react';
import { Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import TextButton from './TextButton';
import Question from './Question';
import { white, green, red } from '../utils/colors';

const QuizView = ({ quizProgress, promptText, questionState, handleCardFlip, handleCorrectBtn, handleIncorrectBtn }) => {  
  return (
    <CenterView>
      <Text style={ styles.progress }>
        { quizProgress }
      </Text>
      <Question 
        onPress={ handleCardFlip }
        promptText={ promptText } 
        questionState={ questionState }
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
  flex: 1;
  align-content: center;
  justify-content: flex-start;
`;

const ButtonView = styled.View`
  marginTop: 75;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const styles = StyleSheet.create({
  corBtn: {
    backgroundColor: green,
    color: white,
    borderWidth: 0,
    fontSize: 24,
  },
  incorBtn: {
    backgroundColor: red,
    color: white,
    borderWidth: 0,
    fontSize: 24,
  }, 
  progress: {
    fontSize: 24,
    marginLeft: 25,
    marginTop: 20,
    textAlign: 'left',
    alignSelf: 'flex-start'
  }
});

export default QuizView;

