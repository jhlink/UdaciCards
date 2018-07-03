import React from 'react';
import { 
  TouchableOpacity, 
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import styled from 'styled-components/native';
import Deck from './Deck';
import { gray } from '../utils/colors';

const DeckListView = ({ decks, handleDeckNav }) => { 
  return (
    <View>
      <FlatList
        data={ decks }
        keyExtractor={( item ) => item.id}
        renderItem={ ({ item }) => {
          return ( 
            <TouchableOpacity 
              style={ styles.item }
              onPress={ () => handleDeckNav(item)}>
              <Deck 
                deckName={ item.deckName } 
                cardCount={ item.cardCount } 
              />
            </TouchableOpacity>
          ); 
        }}
      />
    </View>
  ); 
};

const styles = StyleSheet.create({
  item: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: gray 
  }
});

export default DeckListView;

