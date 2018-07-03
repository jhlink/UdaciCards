import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import deckReducer from './deckReducer';
import quizReducer from './quizReducer';

const rootReducer = combineReducers({
  deckReducer,
  questionReducer,
  quizReducer
});

export default rootReducer;
