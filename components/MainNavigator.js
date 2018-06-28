import { createStackNavigator } from 'react-navigation';
import TabNav from './TabNav';
import SingleDeckView from './SingleDeckView';

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
  }}, {
}
);

export default MainNavigator;
    
