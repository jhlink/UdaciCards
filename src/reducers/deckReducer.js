import {
  GET_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  INC_DECK_CARD_COUNT,
} from '../actions';

function deckReducer (state = {}, action) {
  const { decks, deck, deckId, deckScore } = action;

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

    case INC_DECK_CARD_COUNT: {
      const newDeck = state.decks.map( (deck) => {
        if (deck.id === deckId) {
          const deckType = { 
            ...deck,
            cardCount: deckScore
          };
          console.log(deckType);
          return deckType;
        }
        return deck;
      });

      return {
        ...state,
        decks: newDeck 
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
