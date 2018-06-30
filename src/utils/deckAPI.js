import { AsyncStorage } from 'react-native';
import { PARTIAL_DECK_KEY } from './storageKey';

export const getAllDecks = () => 
  AsyncStorage.getAllKeys((err, keys) => {
    const deckKeys = keys.filter( (key) => key.includes( PARTIAL_DECK_KEY ) );
    return AsyncStorage.multiGet(deckKeys, (err, stores) => {
      return stores.map( (arrayOfDeckKeyAndValue) => {
        const deckKey = arrayOfDeckKeyAndValue[0];
        const deckValue = JSON.parse(arrayOfDeckKeyAndValue[1]);
           
        console.log( deckKey );
        console.log( deckValue );
        return { [ deckKey ] : deckValue };
      });
    });
  });

//  Note: DeckData is unserialized, raw, JSON object. `deckId` is assumed to be a string.
export const addDeck = ( deckId, deckJSONData ) => {
  const deckAsyncStorageKey = PARTIAL_DECK_KEY + deckId;
  const serializedData = JSON.stringify( deckJSONData );
  AsyncStorage.setItem(deckAsyncStorageKey, serializedData)
    .then( (err) => {
      if (err) {
        console.error('addDeck storage failure');
      } else {
        console.log('success');
      }
    });

};

//  Note: `deckId` is assumed to be a string.
export const deleteDeck = ( deckId ) => {
  const deckAsyncStorageKey = PARTIAL_DECK_KEY + deckId;
  AsyncStorage.removeItem(deckAsyncStorageKey)
    .then( (err) => {
      if (err) {
        console.error('deleteDeck storage failure');
      } else {
        console.log('success');
      }
    });
};
