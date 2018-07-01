import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import Deck from './Deck';
import { getDecks } from '../actions';

const CenterView = styled.View`
  justify-content: center;
  borderBottomWidth: 1px;
  borderBottomColor: gray;
  borderStyle: solid;
`;

class DeckListView extends Component { 
  state = {
    decks: []
  }

  componentDidMount() {
    this.props.fetchDecks();
  }

  handlePress = () => {
    this.props.fetchDecks();
  };

  render() {
    const { decks } = this.props;

    return (
      <View>
        { decks !== undefined &&
          decks.map((deck) => {
            return (
              <CenterView key={deck.id}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(
                  'DeckView',
                  { deckName: deck.deckName})}>
                  <Deck deckName={ deck.deckName } cardCount={ deck.cardCount } />
                </TouchableOpacity>
              </CenterView>
            );
          })
        }
        <TouchableOpacity onPress={this.handlePress}>
          <Text>blah</Text>
        </TouchableOpacity>
      </View>
    ); 
  }
}

function mapDispatchToProps ( dispatch ) {
  return { 
    fetchDecks: () => dispatch(getDecks()),
  };
}

function mapStateToProps( state ) {
  const { decks } = state.deckReducer;
  return { decks };
}

export default connect(mapStateToProps, mapDispatchToProps)( DeckListView );

