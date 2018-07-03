import { 
  Platform
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import NewDeckViewLogic from '../containers/NewDeckViewLogic';
import DeckListView from './DeckListView';
import { purple, white } from '../utils/colors';
import { FontAwesome } from '@expo/vector-icons';

const TabNav = createMaterialTopTabNavigator({
  Decks: {
    screen: DeckListView 
  }, 
  NewDeck: {
    screen: NewDeckViewLogic
  }}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    labelStyle: {
      fontSize: 20,
    },
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
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

export default TabNav;

