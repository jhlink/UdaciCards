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

export const setLocalNotification = async () => {
  try {
    const notificationMetaData = await AsyncStorage.getItem(NOTIFICATION_KEY)
      .then( JSON.parse );

    if (notificationMetaData  === null) {
      await Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then( async ({ status }) => {
          if (status === 'granted') {
            await Notifications.cancelAllScheduledNotificationsAsync();

            let today = new Date();
            today.setMinutes(today.getMinutes() + 1);

            await Notifications.scheduleLocalNotificationAsync(
              createNotification(),
              {
                time: today,
                repeat: 'day',
              }
            );

            await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
    }
  } catch (error) {
    console.log('Error setLocalNotification: ', error);
  }
};

