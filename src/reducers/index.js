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
        ...state,
        deck 
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
