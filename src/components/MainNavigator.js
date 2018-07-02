import React from 'react';
import { HeaderBackButton, createStackNavigator } from 'react-navigation';
import TabNav from './TabNav';
import { Text, TouchableOpacity } from 'react-native';
import SingleDeckViewLogic from '../containers/SingleDeckViewLogic';
import NewQuestionViewLogic from '../containers/NewQuestionViewLogic';
import QuizViewLogic from '../containers/QuizViewLogic';

const MainNavigator =  createStackNavigator({
  Decks: {
    screen: TabNav,
    navigationOptions: () => ({
      header: null 
    })
  }, DeckView: {
    screen: SingleDeckViewLogic,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'DECKS',
      headerLeft: 
        <TouchableOpacity 
          onPress={ () => navigation.goBack(null) }
        >
          <Text>DeskList</Text>
        </TouchableOpacity>        
    })
  }, QuizViewLogic: {
    screen: QuizViewLogic,
    navigationOptions: () => ({
      headerTitle: 'Quiz Time!' 
    })
  }, NewQuestionViewLogic: {
    screen: NewQuestionViewLogic,
    navigationOptions: () => ({
      headerTitle: 'New Question' 
    })
  }}, {
  navigationOptions: {
    headerBackImage: null 
  }
}
);

export default MainNavigator;
    
