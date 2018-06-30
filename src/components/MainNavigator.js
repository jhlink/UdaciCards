import { createStackNavigator } from 'react-navigation';
import TabNav from './TabNav';
import SingleDeckView from './SingleDeckView';
import QuizView from './QuizView';
import NewQuestionView from './NewQuestionView';

const MainNavigator =  createStackNavigator({
  Decks: {
    screen: TabNav,
    navigationOptions: () => ({
      header: null 
    })
  }, DeckView: {
    screen: SingleDeckView,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `${navigation.state.params.deckName}` 
    })
  }, QuizView: {
    screen: QuizView,
    navigationOptions: () => ({
      headerTitle: 'Quiz Time!' 
    })
  }, NewQuestionView: {
    screen: NewQuestionView,
    navigationOptions: () => ({
      headerTitle: 'New Question' 
    })
  }}, {
}
);

export default MainNavigator;
    
