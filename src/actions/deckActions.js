import * as DeckAPI from '../utils/deckAPI';

// Actions
export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const INC_DECK_CARD_COUNT = 'INC_DECK_CARD_COUNT';

// Action Creators
const loadDecks = ( decks ) => {
  return {
    type: GET_DECKS,
    decks
  };
};

const addDeck = ( deck, cb ) => {
  cb();
  return {
    type: ADD_DECK,
    deck
  };
};

const incDeckCardCount = ( deckId, deckScore ) => {
  return {
    type: INC_DECK_CARD_COUNT,
    deckId,
    deckScore,
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

export const createDeck = ( deck, cb ) => dispatch => {
  return DeckAPI.addDeck( deck.id, deck )
    .then( () => dispatch(addDeck(deck, cb)));
};

export const purgeDeck = ( deckId ) => dispatch => {
  return DeckAPI.deleteDeck( deckId )
    .then( () => dispatch(removeDeck(deckId)));
};

export const incrementDeckCardCount = ( deckId ) => dispatch => {
  return DeckAPI.incrementCardCount( deckId )
    .then( (deckScore) => dispatch(incDeckCardCount(deckId, deckScore)));
};
