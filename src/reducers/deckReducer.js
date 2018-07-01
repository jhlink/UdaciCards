import {
  GET_DECKS,
  ADD_DECK,
  REMOVE_DECK
} from '../actions';

function deckReducer (state = {}, action) {
  const { decks, deck, deckId } = action;

  switch (action.type) {
    case GET_DECKS: {
      return { 
        ...state,
        decks 
      };
    }

    case ADD_DECK: {
      return { 
        ...state,
        deck: { 
          ...deck,
          deckAdded: true
        }
      };
    }

    case REMOVE_DECK: {
      return { 
        ...state,
        deckId 
      };
    }

    default: 
      return state;
  }
}

export default deckReducer;
