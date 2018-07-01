import React, { Component } from 'react';
import NewQuestionView from '../components/NewQuestionView';

class NewQuestionViewLogic extends Component { 
  state = {
    questionText: '',
    answerText: ''
  }

  toDeckView = () => {
    const { goBack } = this.props.navigation;
    goBack();
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
      />
    ); 
  }
}

export default NewQuestionViewLogic;

