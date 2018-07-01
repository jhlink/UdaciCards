import React, { Component } from 'react';
import NewQuestionView from '../components/NewQuestionView';

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


export default NewQuestionViewLogic;

