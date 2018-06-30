import {
  AsyncStorage,
} from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'UdaciCard:notifications';
const QUIZ_COUNT_KEY = 'UdaciCard:quizcount';

export function setQuizCount(quizCount)  {
  AsyncStorage.flushGetRequests();
  AsyncStorage.setItem(QUIZ_COUNT_KEY, JSON.stringify(quizCount));
}

export function clearQuizCount() {
  AsyncStorage.removeItem(QUIZ_COUNT_KEY);
}

export function checkQuizCount()  {
  AsyncStorage.getItem(QUIZ_COUNT_KEY)
    .then( JSON.parse )
    .then((data) => {
      if (data === 0 || data === null) {
        setLocalNotification();
      } else {
        clearLocalNotification(); 
      }
    });
}

export function clearLocalNotification() {
  AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then( Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
  return {
    title: '😭😭😭 Pop Quiz!! 😳😳😳',
    body: 'Quiz Time! Test thy knowledge of frozen dairy!',
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

function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then( JSON.parse )
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let today = new Date();
              today.setMinutes(today.getMinutes() + 1);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: today,
                  repeat: 'day',
                }
              );

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
      }
    });
}
