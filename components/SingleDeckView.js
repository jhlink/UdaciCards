import React, { Component } from 'react';
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


const dummyData = {
  deckName: 'Italian',
  cardCount: 30
};

class SingleDeckView extends Component { 
  state = {
    deckName: 'Deck',
    cardCount: 0
  }

  componentDidMount() {
    this.setState(dummyData);
  }

  render() {
    const { deckName, cardCount } = this.state;

    return (
      <CenterView>
        <Deck deckName={ deckName } cardCount={ cardCount } />
        <ButtonView>
          <TextButton>
            Add Card
          </TextButton>
          <TextButton
            style={styles.strtBtn} 
          >
            Start Quiz 
          </TextButton>
        </ButtonView>
      </CenterView>
    ); 
  }
}

export default SingleDeckView;

