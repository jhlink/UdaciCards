import {
  AsyncStorage,
} from 'react-native';
import { QUIZ_COUNT_KEY } from './storageKeys'; 

const setQuizCount = async (quizCount) => {
  try {
    await AsyncStorage.setItem(QUIZ_COUNT_KEY, JSON.stringify(quizCount));
  } catch (error) {
    console.log('Error setQuizCount: ', error);
  }
};

export const incrementCount = async ( ) => {
  try {
    const result = await getCount();
    const newQuizCount = ++result;

    await setQuizCount(newQuizCount);
    return newQuizCount;
  } catch (err) {
    console.error('IncrementCount Storage Failure', err);
  }
};

export const clearCount = async () => {
  try {
    await AsyncStorage.removeItem(QUIZ_COUNT_KEY);
  } catch (error) {
    console.log('Error clearQuizCount: ', error);
  }
};

export const getCount = async () => {
  try {
    const quizCount = await AsyncStorage.getItem(QUIZ_COUNT_KEY);
    if ( quizCount === null ) {
      return 0;
    }
    const parsedResult = JSON.parse(quizCount); 

    return parsedResult;
  } catch (error) {
    console.log('Error getQuizCount: ', error);
  }
};
