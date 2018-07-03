import {
  GET_QUIZ_COUNT,
  INCREMENT_QUIZ_COUNT,
  CLEAR_QUIZ_COUNT
} from '../actions';

function quizReducer (state = {}, action) {
  const { count } = action;

  switch (action.type) {
    case GET_QUIZ_COUNT: {
      return { 
        ...state,
        count 
      };
    }

    case INCREMENT_QUIZ_COUNT: {
      return { 
        ...state,
        count
      };
    }

    case CLEAR_QUIZ_COUNT: 
    default: 
      return state;
  }
}

export default quizReducer;
