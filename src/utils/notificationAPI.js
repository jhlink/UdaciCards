import {
  AsyncStorage,
} from 'react-native';
import { Notifications, Permissions } from 'expo';
import { NOTIFICATION_KEY, QUIZ_COUNT_KEY } from './storageKeys'; 

export const setQuizCount = async (quizCount) => {
  try {
    await AsyncStorage.setItem(QUIZ_COUNT_KEY, JSON.stringify(quizCount));
  } catch (error) {
    console.log('Error setQuizCount: ', error);
  }
};

