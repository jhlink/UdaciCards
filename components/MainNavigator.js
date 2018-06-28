import { createStackNavigator } from 'react-navigation';
import TabNav from './TabNav';

const MainNavigator =  createStackNavigator({
  Decks: {
    screen: TabNav,
    navigationOptions: {
      title: 'Decks'
    }
  }
});

export default MainNavigator;
    
