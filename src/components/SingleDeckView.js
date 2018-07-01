import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Deck from './Deck';
import TextButton from './TextButton';
import { white, black } from '../utils/colors';

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
  }
});

const SingleDeckView = ({ deckName, cardCount }) => { 
  return (
    <CenterView>
      <Deck deckName={ deckName } cardCount={ cardCount } />
      <ButtonView>
        <TextButton
          onPress={this.toNewQuestionView}
        >
            Add Card
        </TextButton>
        <TextButton
          onPress={this.toQuizView}
          style={styles.strtBtn} 
        >
            Start Quiz 
        </TextButton>
      </ButtonView>
    </CenterView>
  ); 
};

export default SingleDeckView;

