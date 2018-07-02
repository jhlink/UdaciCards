import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import deckReducer from './deckReducer';

const rootReducer = combineReducers({
  deckReducer,
  questionReducer
});

export default rootReducer;
