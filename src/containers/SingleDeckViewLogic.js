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
    console.log(this.props);

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
  const { deck } = ownProps.navigation.state.params;

  const filteredDeck = decks.filter( (testDeck) => testDeck.id === deck.id)[0];


  //  Hack: For some reason, this.props.deck in the SingleDeckViewLogic component
  //    is undefined when navigating from the NewDeckViewLogic component. 
  //    This is weird because of the following:
  //  1) I ensure that I always get the deckId from the navigation.state.params 
  //    regardless of what component renders this component. 
  //  2) 'decks' property that I'm receiving from the deckReducer should already
  //    have the desired / target deck regardless of what component calls it. 
  //    
  //    As a result, I've made this hack here that returns the required properties
  //    that this component requires to render the SingleDeckView. 
  if (filteredDeck === undefined) {
    return { deck: { cardCount : 0, deckName: '' }}; 
  }
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
