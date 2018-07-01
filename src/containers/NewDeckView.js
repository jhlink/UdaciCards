import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createDeck } from '../actions';
import NewDeckForm from '../components/NewDeckForm';
import uuidv4 from 'uuid/v4';

const INIT_DECK = {
  deckName: '',
  deckAdded: false
};

class NewDeckView extends Component { 
  state = {
    deckName: '',
    deckAdded: false
  }

  toSingleDeckView = () => {
    // TODO: Will replace 'test' with uuidv4 post development.
    const newDeck = {
      cardCount: 0,
      id: 'test',
      ...this.state
    };

    this.props.addDeck(newDeck);
  }

  componentDidUpdate( ) {
    if (this.props.deckAdded) {
      this.setState = INIT_DECK; 

      this.props.goToDeck(
        'DeckView',
        { ...this.state }
      );
    }
  }

  handleDeckNameChange = (deckName) => {
    this.setState( { deckName });
  }

  render() {
    const { deckName } = this.state;

    return (
      <NewDeckForm 
        deckName={ deckName }
        handleSubmit={ this.toSingleDeckView }
        handleDeckName={ this.handleDeckNameChange }
      />
    ); 
  }
}

function mapStateToProps ( state ) {
  const { deck } = state.deckReducer;

  return {
    ...deck
  };
}

function mapDispatchToProps ( dispatch, { navigation }) {
  return {
    addDeck: (deckData) =>  dispatch(createDeck(deckData)),
    goToDeck: (componentAsString, propsToPass) => {
      navigation.navigate(componentAsString, propsToPass);      
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckView);

