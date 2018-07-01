import React, { Component } from 'react';
import NewQuestionView from '../components/NewQuestionView';
import { connect } from 'react-redux';

const INIT_QUESTION = {
  questionText: '',
  answerText: ''
};

class NewQuestionViewLogic extends Component { 
  state = {
    questionText: '',
    answerText: ''
  }

  toDeckView = () => {
    const newQuestion = {
      id: 'test',
      ...this.state
    };

    console.log(newQuestion);
    //this.props.addQuestion(newQuestion);
  }

  componentDidUpdate( ) {
    const { question, goBack } = this.props;

    if (question !== undefined && question.deckAdded) {
      this.setState = INIT_QUESTION; 

      goBack();
    }
  }

  handleAnswerTextChange = ( answerText ) => {
    this.setState( { answerText });
  }

  handleQuestionTextChange = ( questionText ) => {
    this.setState( { questionText });
  }

  render() {
    const { questionText, answerText } = this.state;

    return (
      <NewQuestionView
        questionText={ questionText }   
        answerText={ answerText }
        handleQuestionChange={ this.handleQuestionTextChange }   
        handleAnswerChange={ this.handleAnswerTextChange }
        handleOnSubmit={ this.toDeckView }
      />
    ); 
  }
}

function mapStateToProps ( state ) {
  const { question } = state.questionReducer;

  return {
    question 
  };
}

function mapDispatchToProps ( dispatch, { navigation }) {
  return {
    addQuestion: (questionData) =>  dispatch(createQuestion(questionData)),
    goBack: () => navigation.goBack(), 
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionViewLogic);

