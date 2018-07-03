import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createDeck } from '../actions';
import NewDeckForm from '../components/NewDeckForm';
import uuidv4 from 'uuid/v4';

const INIT_DECK = {
  deckName: '',
  deckAdded: false,
  errorMsg: ''
};

class NewDeckViewLogic extends Component { 
  state = {
    deckName: '',
    deckAdded: false,
    errorMsg: ''
  }

  toSingleDeckView = () => {
    const { deckName } = this.state;
    const { goToDeck } = this.props;

    const scrubInputs = deckName.trim();

    if ( scrubInputs.length === 0 ) {
      console.log('inputs', scrubInputs, scrubInputs.length);
      this.setState({
        errorMsg: 'Please add a deck name. :)'
      });
      return;
    }

    const newDeck = {
      cardCount: 0,
      id: uuidv4(),
      deckName,
    };

    this.props.addDeck(newDeck, () => {
      this.setState(INIT_DECK); 
      goToDeck( 'DeckView', { deck: newDeck });
    });
  }

  handleDeckNameChange = ( deckName ) => {
    this.setState( { deckName } );
  }

  render() {
    const { deckName, errorMsg } = this.state;

    return (
      <NewDeckForm 
        errorMsg={ errorMsg }
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
    deck
  };
}

function mapDispatchToProps ( dispatch, { navigation }) {
  return {
    addDeck: (deckData, cb) =>  dispatch(createDeck(deckData, cb)),
    goToDeck: (componentAsString, propsToPass) => {
      navigation.navigate(componentAsString, propsToPass);      
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckViewLogic);

