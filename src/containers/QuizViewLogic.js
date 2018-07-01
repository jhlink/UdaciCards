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

  handleCorrectAnswer = () => {
    this.setState({ score: this.state.score + 1});
  }

  handleIncorrectAnswer = () => {
    const newScore = (this.state.score - 1) > 0 ? this.state.score - 1 : 0 ;
    this.setState({ score: newScore });
  }
    
  render() {
    const { questions } = this.props;
    const { score } = this.state;
    console.log('score: ', score);

    return(
      <QuizView
        promptText={''}
        answerText={''}
        handleCorrectBtn={ this.handleCorrectAnswer }
        handleIncorrectBtn={ this.handleIncorrectAnswer }
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

