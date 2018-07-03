import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import Deck from './Deck';

const CenterView = styled.View`
  justify-content: center;
  borderBottomWidth: 1px;
  borderBottomColor: gray;
  borderStyle: solid;
`;

const DeckListView = ({ decks, handleDeckNav }) => { 
  return (
    <View>
      { decks !== undefined &&
          decks.map((deck) => {
            return (
              <CenterView key={deck.id}>
                <TouchableOpacity onPress={ () => handleDeckNav(deck)}>
                  <Deck 
                    deckName={ deck.deckName } 
                    cardCount={ deck.cardCount } 
                  />
                </TouchableOpacity>
              </CenterView>
            );
          })
      }
    </View>
  ); 
};

export default DeckListView;

