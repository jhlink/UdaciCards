import {
  GET_QUESTIONS,
  ADD_QUESTION,
  REMOVE_QUESTION
} from '../actions';

function questionReducer (state = {}, action) {
  const { questions, question, questionId } = action;

  switch (action.type) {
    case GET_QUESTIONS: {
      return { 
        ...state,
        questions 
      };
    }

    case ADD_QUESTION: {
      return { 
        ...state,
        question: { 
          ...question,
          questionAdded: true
        }
      };
    }

    case REMOVE_QUESTION: {
      return { 
        ...state,
        questionId 
      };
    }

    default: 
      return state;
  }
}

export default questionReducer;
