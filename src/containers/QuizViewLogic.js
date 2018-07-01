import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizView from '../components/QuizView';

import { getQuestions } from '../actions';

class QuizViewLogic extends Component { 
  state = {
    answeredQuestion: [],
    score: 0
  }

  componentDidMount() {
    const { fetchQuestions } = this.props;
    fetchQuestions();
  }
    
  render() {
    const { questions } = this.props;

    return(
      <QuizView
        promptText={''}
        answerText={''}
      />
    );
  }
}

function mapDispatchToProps ( dispatch ) {
  return { 
    fetchQuestions: () => dispatch(getQuestions()),
  };
}

function mapStateToProps( state ) {
  const { questions } = state.questionReducer;
  return { questions };
}

export default connect(mapStateToProps, mapDispatchToProps)( QuizViewLogic );

