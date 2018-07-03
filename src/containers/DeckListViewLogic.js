import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeckListView from '../components/DeckListView';
import { getDecks, purgeDeck } from '../actions';

class DeckListViewLogic extends Component { 
  state = {
    decks: []
  }

  componentDidMount() {
    this.props.fetchDecks();
  }

  handlePress = () => {
    this.props.fetchDecks();
  };

  handleDeckNavigation = ( deck ) => {
    this.props.goToDeck( 'DeckView', { deck });
  }

  handleDeckDelete = ( deckId ) => {
    this.props.deleteDeck( deckId );  
  }

  render() {
    const { decks } = this.props;

    return (
      <DeckListView
        decks={ decks }
        handleDeckNav={ this.handleDeckNavigation }
        handleDeckDelete={ this.handleDeckDelete }
      />
    ); 
  }
}

function mapDispatchToProps ( dispatch, { navigation } ) {
  return { 
    deleteDeck: ( deckId ) => dispatch(purgeDeck( deckId )),
    fetchDecks: () => dispatch(getDecks()),
    goToDeck: ( componentKey, propsToPass) => navigation.navigate( componentKey, propsToPass ), 
  };
}

function mapStateToProps( state ) {
  const { decks } = state.deckReducer;
  return { decks };
}

export default connect(mapStateToProps, mapDispatchToProps)( DeckListViewLogic );

