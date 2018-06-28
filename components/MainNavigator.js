import React from 'react';
import { createStackNavigator } from 'react-navigation';
import DeckListView from './DeckListView';

const MainNavigator =  createStackNavigator({
  Home: {
    screen: DeckListView
  }
});

export default MainNavigator;
    
