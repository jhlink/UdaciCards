import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizView from '../components/QuizView';

import { getQuestions } from '../actions';

class QuizViewLogic extends Component { 
  state = {
    answeredQuestions: [],
    score: 0,
    isQuestion: true,
    currentQuestion: {}
  }

  componentDidMount() {
    const { fetchQuestions } = this.props;
    fetchQuestions();
  }
  
  getRandomInt = ( max ) => {
    return Math.floor(Math.random() * (max + 1));
  }


  filterList = ( targetList, filterCriteriaList ) => {
    return targetList.filter(
      function(e) {
        return this.indexOf(e) < 0;
      },
      filterCriteriaList 
    );
  }

  handleNextQuestion = ( ) => {
    const { questions } = this.props;
    const { answeredQuestions } = this.state;

    const remainingQuestions = answeredQuestions.length !== 0  
      ? this.filterList(questions, answeredQuestions)  
      : questions;
    
    const randomQuestionIndex = this.getRandomInt( remainingQuestions.length );

    return remainingQuestions[ randomQuestionIndex ];
  }

  handleCorrectAnswer = () => {
    const { score } = this.state;
    const nextQuestion = this.handleNextQuestion();
    const newScore = score + 1;
    this.setState({ 
      score: newScore,
      currentQuestion: nextQuestion
    });
  }

  handleIncorrectAnswer = () => {
    const { score } = this.state;
    const nextQuestion = this.handleNextQuestion();
    const newScore = score > 0 ? score - 1 : 0;
    this.setState({ 
      score: newScore,
      currentQuestion: nextQuestion
    });
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
    const { score, isQuestion, currentQuestion } = this.state;
    console.log('score: ', score);

    const cardPromptTest = isQuestion ? currentQuestion.questionText : currentQuestion.answerText;

    return(
      <QuizView
        promptText={ cardPromptTest }
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

