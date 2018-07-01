import { AsyncStorage } from 'react-native';
import { PARTIAL_DECK_KEY } from './storageKeys';

export const getAllDecks = async () => {
  try {
    const deckKeys = await AsyncStorage.getAllKeys();
    const filteredKeys =  deckKeys.filter( (key) => key.includes( PARTIAL_DECK_KEY ) );

    const serializedDecks =  await AsyncStorage.multiGet(filteredKeys);
    const formatted =  serializedDecks.map( (arrayOfDeckKeyAndValue) => {
      const deckValue = JSON.parse(arrayOfDeckKeyAndValue[1]);
            
      return deckValue;
    });

    console.log(formatted);

    return formatted;
  } catch (error) {
    console.log('Error getAllDecks: ', error);
  }

};

//  Note: DeckData is unserialized, raw, JSON object. `deckId` is assumed to be a string.
export const addDeck = async ( deckId, deckJSONData ) => {
  const deckAsyncStorageKey = PARTIAL_DECK_KEY + deckId;
  const serializedData = JSON.stringify( deckJSONData );
  try {
    const result = await AsyncStorage.setItem(deckAsyncStorageKey, serializedData);
  } catch (err) {
    console.error('addDeck storage failure');
  }
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
