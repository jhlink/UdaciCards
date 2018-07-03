import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import deckReducer from './deckReducer';
import quizReducer from './quizReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  deckReducer,
  questionReducer,
  quizReducer,
  notificationReducer,
});

export default rootReducer;
