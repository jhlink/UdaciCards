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
  fontSize: 18;
`;

const Deck = ({ deckName, cardCount }) => {
  return (
    <CenterView>
      <DeckTitle>{deckName}</DeckTitle>
      <CardCount>{cardCount} cards</CardCount>
    </CenterView>
  ); 
};

export default Deck;

