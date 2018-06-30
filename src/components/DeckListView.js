import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import Deck from './Deck';

const CenterView = styled.View`
  justify-content: center;
  borderBottomWidth: 1px;
  borderBottomColor: gray;
  borderStyle: solid;
`;

const dummyData = [
  { 
    deckName: 'Italian',
    cardCount: 30 
  },
  { 
    deckName: 'English',
    cardCount: 20 
  }
];

class DeckListView extends Component { 
  state = {
    decks: []
  }

  componentDidMount() {
    this.setState({ decks: dummyData });  
  }

  render() {
    const { decks } = this.state;

    return (
      <View>
        { decks.map((deck) => {
          return (
            <CenterView key={deck.deckName}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(
                'DeckView',
                { deckName: deck.deckName})}>
                <Deck deckName={ deck.deckName } cardCount={ deck.cardCount } />
              </TouchableOpacity>
            </CenterView>
          );
        })}
      </View>
    ); 
  }
}

export default DeckListView;

