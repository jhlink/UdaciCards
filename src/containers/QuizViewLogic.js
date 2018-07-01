import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizView from '../components/QuizView';

import { getQuestions } from '../actions';

class QuizViewLogic extends Component { 
  state = {
    answeredQuestion: [],
    score: 0,
    isQuestion: true 
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

  toggleQuestionAnswerPrompt = () => {
    const { isQuestion } = this.state;
    if (isQuestion) {
      this.setState({
        isQuestion: false
      });
    } else {
      this.setState({
        isQuestion: true 
      });
    }
  }
    
  render() {
    const { questions } = this.props;
    const { score, isQuestion } = this.state;
    console.log('score: ', score);

    return(
      <QuizView
        promptText={''}
        questionState={ isQuestion }
        handleCardFlip={ this.toggleQuestionAnswerPrompt }
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

