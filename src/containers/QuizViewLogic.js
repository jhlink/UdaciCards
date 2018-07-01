import React, { Component } from 'react';
import QuizView from '../components/QuizView';

class QuizViewLogic extends Component { 
  state = {
    prompt: '?',
    answer: '-'
  }

  componentDidMount() {
  }

  render() {
    const { prompt, answer } = this.state;

    return(
      <QuizView />
    );
  }
}

export default QuizViewLogic;
