import {
  AsyncStorage,
} from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'UdaciCard:notifications';

export function clearLocalNotification() {
  AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then( Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
  return {
    title: '😭😭😭 Pop Quiz!! 😳😳😳',
    body: 'Quiz Time! Test your ice cream knowledge!',
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

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then( JSON.parse )
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              );

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
      }
    });
}
