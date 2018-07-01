import { AsyncStorage } from 'react-native';
import { PARTIAL_DECK_KEY } from './storageKeys';

export const getAllDecks = async () => {
  try {
    await AsyncStorage.getAllKeys( async (err, keys) =>  {
      const deckKeys = keys.filter( (key) => key.includes( PARTIAL_DECK_KEY ) );
      
      const decks =  await AsyncStorage.multiGet(deckKeys, (err, stores) => {
        return stores.map( (arrayOfDeckKeyAndValue) => {
          const deckKey = arrayOfDeckKeyAndValue[0];
          const deckValue = JSON.parse(arrayOfDeckKeyAndValue[1]);
           
          console.log( deckKey );
          console.log( deckValue );
          return { [ deckKey ] : deckValue };
        });
      });
      
      if (decks !== null) {
        const deckKeys = decks.filter( (key) => key.includes( PARTIAL_DECK_KEY ) );
        console.log(deckKeys);
        return deckKeys;
      }

    });
  } catch (error) {
    console.log(error);
  }
};

//  Note: DeckData is unserialized, raw, JSON object. `deckId` is assumed to be a string.
export const addDeck = async ( deckId, deckJSONData ) => {
  const deckAsyncStorageKey = PARTIAL_DECK_KEY + deckId;
  const serializedData = JSON.stringify( deckJSONData );
  return await AsyncStorage.setItem(deckAsyncStorageKey, serializedData)
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
  return AsyncStorage.removeItem(deckAsyncStorageKey)
    .then( (err) => {
      if (err) {
        console.error('deleteDeck storage failure');
      } else {
        console.log('success');
      }
    });
};
