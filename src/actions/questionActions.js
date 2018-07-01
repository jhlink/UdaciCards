import * as QuestionAPI from '../utils/questionAPI';

// Actions
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

// Action Creators
const loadQuestions = ( questions ) => {
  return {
    type: GET_QUESTIONS,
    questions
  };
};

const addQuestion = ( question ) => {
  return {
    type: ADD_QUESTION,
    question
  };
};

const removeQuestion = ( questionId ) => {
  return {
    type: REMOVE_QUESTION,
    questionId
  };
};

// Thunks
export const getQuestions = () => dispatch => {
  return QuestionAPI.getAllQuestions()
    .then( (questions) => dispatch(loadQuestions(questions)));
};

export const createQuestion = ( question ) => dispatch => {
  return QuestionAPI.addQuestion( question.id, question )
    .then( () => dispatch(addQuestion(question)));
};

export const purgeQuestion = ( questionId ) => dispatch => {
  return QuestionAPI.deleteQuestion( questionId )
    .then( () => dispatch(removeQuestion(questionId)));
};
