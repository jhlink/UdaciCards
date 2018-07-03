import React from 'react';
import { 
  TouchableOpacity, 
  View,
  FlatList
} from 'react-native';
import styled from 'styled-components/native';
import Deck from './Deck';

const DeckListView = ({ decks, handleDeckNav }) => { 
  return (
    <View>
      <FlatList
        data={ decks }
        keyExtractor={( item ) => item.id}
        renderItem={ ({ item }) => {
          return ( 
            <CenterView >
              <TouchableOpacity 
                onPress={ () => handleDeckNav(item)}>
                <Deck 
                  deckName={ item.deckName } 
                  cardCount={ item.cardCount } 
                />
              </TouchableOpacity>
            </CenterView>
          ); 
        }}
      />
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

