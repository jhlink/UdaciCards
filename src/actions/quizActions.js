import * as QuizAPI from '../utils/quizAPI';

// Actions
export const GET_QUIZ_COUNT = 'GET_QUIZ_COUNT';
export const INCREMENT_QUIZ_COUNT = 'INCREMENT_QUIZ_COUNT';
export const CLEAR_QUIZ_COUNT = 'CLEAR_QUIZ_COUNT';

// Action Creators
const getQuizCount = ( count ) => {
  return {
    type: GET_QUIZ_COUNT,
    count
  };
};

const incrementQuizCount = ( ) => {
  return {
    type: INCREMENT_QUIZ_COUNT,
  };
};

const clearQuizCount = ( ) => {
  return {
    type: CLEAR_QUIZ_COUNT,
  };
};

// Thunks
export const fetchQuizCount = () => dispatch => {
  return QuizAPI.getCount()
    .then( ( count ) => dispatch(getQuizCount( count )));
};

export const purgeQuizCount = ( ) => dispatch => {
  return QuizAPI.clearCount( )
    .then( () => dispatch(clearQuizCount()));
};

export const incQuizCount = ( ) => dispatch => {
  return QuizAPI.incrementCount( )
    .then( ( quizCount ) => dispatch(incrementQuizCount( quizCount )));
};
