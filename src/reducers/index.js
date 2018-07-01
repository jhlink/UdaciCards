import { combineReducers } from 'redux';
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

const rootReducer = combineReducers({
  deckReducer,
});

export default rootReducer;
