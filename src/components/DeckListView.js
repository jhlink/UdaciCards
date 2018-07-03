import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import Deck from './Deck';

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

const CenterView = styled.View`
  justify-content: center;
  borderBottomWidth: 1px;
  borderBottomColor: gray;
  borderStyle: solid;
`;

export default DeckListView;

