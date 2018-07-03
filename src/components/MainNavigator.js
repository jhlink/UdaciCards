import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabNav from './TabNav';
import SingleDeckViewLogic from '../containers/SingleDeckViewLogic';
import NewQuestionViewLogic from '../containers/NewQuestionViewLogic';
import QuizViewLogic from '../containers/QuizViewLogic';
import { purple, white } from '../utils/colors';

const MainNavigator =  createStackNavigator({
  Decks: {
    screen: TabNav,
    navigationOptions: () => ({
      header: null 
    })
  }, DeckView: {
    screen: SingleDeckViewLogic,
    navigationOptions: () => ({
      headerTitle: 'DECKS',
    })
  }, QuizViewLogic: {
    screen: QuizViewLogic,
    navigationOptions: () => ({
      headerTitle: 'QUIZ TIME!' 
    })
  }, NewQuestionViewLogic: {
    screen: NewQuestionViewLogic,
    navigationOptions: () => ({
      headerTitle: 'NEW QUESTION' 
    })
  }}, {
  navigationOptions: {
    headerTitleStyle: {
      fontSize: 25,
      fontWeight: 'normal',
      flex: 1,
      textAlign: 'center',
    },
    headerRight: <View></View>,
    headerTintColor: white,
    headerStyle: {
      height: 56,
      backgroundColor: purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}
);

export default MainNavigator;
    
