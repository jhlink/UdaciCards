import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Deck from './Deck';
import TextButton from './TextButton';
import { white, black, darkGray, lightGray } from '../utils/colors';

const CenterView = styled.View`
  flex: 1;
  align-content: center;
  justify-content: flex-start;
  margin-top: 40;
`;

const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  marginTop: 40;
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
  },
  deck: {
    marginBottom: 0,
  }
});

const SingleDeckView = ({ deckName, cardCount, handleCardAdd, handleQuizStart }) => { 
  const disableQuiz = cardCount === 0;
  const quizBtnStyle = disableQuiz ? styles.disabled : styles.strtBtn;
  return (
    <CenterView>
      <Deck 
        deckName={ deckName } 
        cardCount={ cardCount } 
        style={ styles.deck }
      />
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

