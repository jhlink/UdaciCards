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

  render() {
    const { questionText, answerText } = this.state;

    return (
      <NewQuestionView
        questionText={ questionText }   
        answerText={ answerText }
      />
    ); 
  }
}

export default NewQuestionViewLogic;

