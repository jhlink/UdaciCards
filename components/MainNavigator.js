import { createStackNavigator } from 'react-navigation';
import TabNav from './TabNav';

const MainNavigator =  createStackNavigator({
  Decks: {
    screen: TabNav,
  }}, {
  headerMode: 'none',
}
);

export default MainNavigator;
    
