import {
  AsyncStorage,
} from 'react-native';
import { QUIZ_COUNT_KEY } from './storageKeys'; 

export const setQuizCount = async (quizCount) => {
  try {
    await AsyncStorage.setItem(QUIZ_COUNT_KEY, JSON.stringify(quizCount));
  } catch (error) {
    console.log('Error setQuizCount: ', error);
  }
};

export const clearQuizCount = async () => {
  try {
    await AsyncStorage.removeItem(QUIZ_COUNT_KEY);
  } catch (error) {
    console.log('Error clearQuizCount: ', error);
  }
};

export const getCount = async () => {
  try {
    const quizCount = await AsyncStorage.getItem(QUIZ_COUNT_KEY);
    const parsedResult = JSON.parse(quizCount); 

    return parsedResult;
  } catch (error) {
    console.log('Error getQuizCount: ', error);
  }
};
