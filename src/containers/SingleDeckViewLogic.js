import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleDeckView from '../components/SingleDeckView';

class SingleDeckViewLogic extends Component { 
  toNewQuestionView = () => {
    const { goToScreen, deck } = this.props;
    const { id } = deck; 

    goToScreen(
      'NewQuestionViewLogic',
      { id }
    );
  }

  toQuizView = () => {
    const { goToScreen, deck } = this.props;
    const { id } = deck;

    goToScreen(
      'QuizViewLogic',
      { id }
    );
  }

  render() {
    const { cardCount, deckName } = this.props.deck;

    return (
      <SingleDeckView 
        deckName={ deckName } 
        cardCount={ cardCount } 
        handleCardAdd={ this.toNewQuestionView }
        handleQuizStart={ this.toQuizView }
      />
    );
  }
}

function mapStateToProps ( state, ownProps ) {
  const { decks } = state.deckReducer;
  const { id } = ownProps.navigation.state.params.deck;
  
  if ( decks === undefined) {
    return { };
  }

  const filteredDeck = decks.filter( (deck) => deck.id === id)[0];
  return { deck: filteredDeck };
}

function mapDispatchToProps ( dispatch, { navigation }) {
  return {
    goToScreen: (componentAsString, propsToPass) => {
      navigation.navigate(componentAsString, propsToPass);      
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleDeckViewLogic);
