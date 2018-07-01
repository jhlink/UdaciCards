import React, { Component } from 'react';
import SingleDeckView from '../components/SingleDeckView';

class SingleDeckViewLogic extends Component { 
  state = {
    deckName: 'Deck',
    cardCount: 0
  }

  componentDidMount() {
    const { deck } = this.props.navigation.state.params;
    this.setState({ ...deck });
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
    const { cardCount, deckName } = this.state;

    return(
      <SingleDeckView 
        deckName={ deckName } 
        cardCount={ cardCount } 
        handleCardAdd={ this.toNewQuestionView }
        handleQuizStart={ this.toQuizView }
      />
    );
  }
}

export default SingleDeckViewLogic;
