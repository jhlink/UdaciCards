import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeckListView from '../components/DeckListView';
import { getDecks } from '../actions';

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

  render() {
    const { decks } = this.props;

    return (
      <DeckListView
        decks={ decks }
        handleDeckNav={ this.handleDeckNavigation }
      />
    ); 
  }
}

function mapDispatchToProps ( dispatch, { navigation } ) {
  return { 
    fetchDecks: () => dispatch(getDecks()),
    goToDeck: ( componentKey, propsToPass) => navigation.navigate( componentKey, propsToPass ), 
  };
}

function mapStateToProps( state ) {
  const { decks } = state.deckReducer;
  return { decks };
}

export default connect(mapStateToProps, mapDispatchToProps)( DeckListViewLogic );

