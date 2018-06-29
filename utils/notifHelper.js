import React from 'react';
import {
  AsyncStorage,
} from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'UdaciCard:notifications';

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
