import React from 'react';
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
  fontSize: 22;
`;

const Deck = ({ deckName, cardCount, styles = {} }) => {
  return (
    <CenterView>
      <DeckTitle style={ styles }>{deckName}</DeckTitle>
      <CardCount style={ styles }>{cardCount} cards</CardCount>
    </CenterView>
  ); 
};

export default Deck;

