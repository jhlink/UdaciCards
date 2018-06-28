import React from 'react';
import { createStackNavigator } from 'react-navigation';
import DeckListView from './DeckListView';

const MainNavigator =  createStackNavigator({
  Decks: {
    screen: DeckListView,
    navigationOptions: {
      title: 'Decks'
    }
  }
});

export default MainNavigator;
    
