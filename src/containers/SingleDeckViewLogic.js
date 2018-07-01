import React, { Component } from 'react';
import SingleDeckView from '../components/SingleDeckView';

class SingleDeckViewLogic extends Component { 
  state = {
    deckName: 'Deck',
    cardCount: 0
  }

  componentDidMount() {
    this.setState({
      ...this.props 
    });
  }

  toNewQuestionView = () => {
    this.props.navigation.navigate(
      'NewQuestionView',
      { ...this.state }
    );
  }

  toQuizView = () => {
    this.props.navigation.navigate(
      'QuizView',
      { ...this.state }
    );
  }

  render() {
    return(
      <SingleDeckView />
    );
  }
}

export default SingleDeckViewLogic;
