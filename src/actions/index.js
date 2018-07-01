// Actions
export const GET_DECKS = 'GET_DECKS';

// Action Creators
const loadDecks = ( decks ) => {
  return {
    type: GET_DECKS,
    decks
  };
};

// Thunks
