import { createStackNavigator } from 'react-navigation';
import TabNav from './TabNav';
import SingleDeckView from './SingleDeckView';

const MainNavigator =  createStackNavigator({
  Decks: {
    screen: TabNav,
  }, DeckView: {
    screen: SingleDeckView
  }}, {
  headerMode: 'none',
}
);

export default MainNavigator;
    
