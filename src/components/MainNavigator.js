import { createStackNavigator } from 'react-navigation';
import TabNav from './TabNav';
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
    headerBackImage: null 
  }
}
);

export default MainNavigator;
    
