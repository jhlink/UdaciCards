export const GET_DECKS = 'GET_DECKS';

const loadDecks = ( decks ) => {
  return {
    type: GET_DECKS,
    decks
  };
};

