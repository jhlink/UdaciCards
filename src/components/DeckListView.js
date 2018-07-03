import React from 'react';
import { 
  TouchableOpacity, 
  View,
  FlatList,
  StyleSheet,

} from 'react-native';
import styled from 'styled-components/native';
import Deck from './Deck';
import { gray } from '../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const DeckListView = ({ decks, handleDeckNav, handleDeckDelete }) => { 
  return (
    <View>
      <FlatList
        data={ decks }
        keyExtractor={( item ) => item.id}
        renderItem={ ({ item }) => {
          return ( 
            <View style={ styles.itemContainer }>  
              <TouchableOpacity 
                style={ styles.item }
                onPress={ () => handleDeckNav(item)}>
                <Deck 
                  styles={ styles.deck }
                  deckName={ item.deckName } 
                  cardCount={ item.cardCount } 
                />
              </TouchableOpacity>
              <Icon
                name="trash"
                size={50}
                style={ styles.icon }
                onPress={ () => console.log('Yay') }
              />
            </View>
          ); 
        }}
      />
    </View>
  ); 
};

const styles = StyleSheet.create({
  item: {
    marginLeft: 25,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: gray 
  },
  icon: {
    alignSelf: 'center',
    marginRight: 25,
  }, 
  deck: {
    textAlign: 'left',
    maxWidth: 300,
    overflow: 'hidden'
  }
});

export default DeckListView;

