import {
  AsyncStorage,
} from 'react-native';
import { Notifications, Permissions } from 'expo';
import { NOTIFICATION_KEY } from './storageKeys'; 

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

            //  TEST_POINT
            // For testing purposes, the following three lines may be commented
            //  such that the notification may be seen. 

            //today.setDate(today.getDate() + 1);
            //today.setHours(20);
            //today.setMinutes(0);

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

