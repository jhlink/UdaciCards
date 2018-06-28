import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import NewDeckView from './NewDeckView';
import DeckListView from './DeckListView';

const TabNav = createBottomTabNavigator({
  Decks: {
    screen: DeckListView 
  }, 
  NewDeck: {
    screen: NewDeckView
  }
});

export default TabNav;

