import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const CenterView = styled.View`
  align-content: center;
  justify-content: center;
`;

const DeckTitle = styled.Text`
  text-align: center;
  color: black;
  fontSize: 36;
`;

const CardCount = styled.Text`
  text-align: center;
  color: gray;
  fontSize: 18;
`;

class Deck extends Component { 
  render() {
    const { deckName, cardCount } = this.props;

    return (
      <CenterView>
        <DeckTitle>{deckName}</DeckTitle>
        <CardCount>{cardCount} cards</CardCount>
      </CenterView>
    ); 
  }
}

export default Deck;

