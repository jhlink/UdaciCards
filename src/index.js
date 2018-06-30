import React  from 'react';
import { StyleSheet, View } from 'react-native';
import Expo from 'expo';

import App from './components/App';

if (process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate();
}

Expo.registerRootComponent(App);
