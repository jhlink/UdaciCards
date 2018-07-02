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

export const clearQuizCount = async () => {
  try {
    await AsyncStorage.removeItem(QUIZ_COUNT_KEY);
  } catch (error) {
    console.log('Error clearQuizCount: ', error);
  }
};

export const getQuizCount = async () => {
  try {
    const quizCount = await AsyncStorage.getItem(QUIZ_COUNT_KEY);
    const parsedResult = JSON.parse(quizCount); 

    return parsedResult;
  } catch (error) {
    console.log('Error getQuizCount: ', error);
  }
};

export const clearLocalNotification = async () => {
  try {
    await AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then( Notifications.cancelAllScheduledNotificationsAsync);
  } catch (error) {
    console.log('Error clearLocalNotification: ', error);
  }
};

function createNotification() {
  return {
    title: '😭😭😭 Pop Quiz!! 😳😳😳',
    body: 'Quiz Time! Test thy knowledge!',
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      sticky: false,
      vibrate: true,
      priority: 'high'
    }
  };
}

