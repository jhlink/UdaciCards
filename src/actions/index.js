import * as DeckAPI from '../utils/deckAPI';

// Actions
export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';

// Action Creators
const loadDecks = ( decks ) => {
  return {
    type: GET_DECKS,
    decks
  };
};

// Thunks
export const getDecks = () => dispatch => {
  return DeckAPI.getAllDecks()
    .then( (decks) => dispatch(loadDecks(decks)));
};

   
