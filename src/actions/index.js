import * as DeckAPI from '../utils/deckAPI';

// Actions
export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

// Action Creators
const loadDecks = ( decks ) => {
  return {
    type: GET_DECKS,
    decks
  };
};

const addDeck = ( deck ) => {
  return {
    type: ADD_DECK,
    deck
  };
};

const removeDeck = ( deckId ) => {
  return {
    type: REMOVE_DECK,
    deckId
  };
};

// Thunks
export const getDecks = () => dispatch => {
  return DeckAPI.getAllDecks()
    .then( (decks) => dispatch(loadDecks(decks)));
};

export const createDeck = ( deck ) => dispatch => {
  return DeckAPI.addDeck( deck.id, deck )
    .then( () => dispatch(addDeck(deck)));
};

export const purgeDeck = ( deckId ) => dispatch => {
  return DeckAPI.deleteDeck( deckId )
    .then( () => dispatch(removeDeck(deckId)));
};
