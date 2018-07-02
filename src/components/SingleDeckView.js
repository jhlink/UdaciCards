import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Deck from './Deck';
import TextButton from './TextButton';
import { white, black, darkGray, lightGray } from '../utils/colors';

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
  strtBtn: {
    backgroundColor: black,
    color: white
  },
  disabled: {
    backgroundColor: darkGray,
    color: lightGray,
    borderWidth: 0
  }
});

const SingleDeckView = ({ deckName, cardCount, handleCardAdd, handleQuizStart }) => { 
  const disableQuiz = cardCount === 0;
  const quizBtnStyle = disableQuiz ? styles.disabled : styles.strtBtn;
  return (
    <CenterView>
      <Deck deckName={ deckName } cardCount={ cardCount } />
      <ButtonView>
        <TextButton
          onPress={ handleCardAdd }
        >
            Add Card
        </TextButton>
        <TextButton
          onPress={ handleQuizStart }
          style={ quizBtnStyle } 
          disabled={ disableQuiz }
        >
            Start Quiz 
        </TextButton>
      </ButtonView>
    </CenterView>
  ); 
};

export default SingleDeckView;

