import { AsyncStorage } from 'react-native';
import { PARTIAL_DECK_KEY } from './storageKey';
import uuidv4 from 'uuid/v4';

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

        

