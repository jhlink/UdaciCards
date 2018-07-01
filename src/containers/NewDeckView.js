import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addDeck } from '../actions';
import NewDeckForm from '../components/NewDeckForm';


class NewDeckView extends Component { 
  state = {
    deckName: 'Deck'
  }

  toSingleDeckView = () => {
    this.props.navigation.navigate(
      'DeckView',
      { ...this.state }
    );
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

export default connect()(NewDeckView);

