import { createStackNavigator } from 'react-navigation';
import TabNav from './TabNav';
import SingleDeckViewLogic from '../containers/SingleDeckViewLogic';
import NewQuestionViewLogic from '../containers/NewQuestionViewLogic';
import QuizView from './QuizView';

const MainNavigator =  createStackNavigator({
  Decks: {
    screen: TabNav,
    navigationOptions: () => ({
      header: null 
    })
  }, DeckView: {
    screen: SingleDeckViewLogic,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'DECKS' 
    })
  }, QuizView: {
    screen: QuizView,
    navigationOptions: () => ({
      headerTitle: 'Quiz Time!' 
    })
  }, NewQuestionViewLogic: {
    screen: NewQuestionViewLogic,
    navigationOptions: () => ({
      headerTitle: 'New Question' 
    })
  }}, {
}
);

export default MainNavigator;
    
