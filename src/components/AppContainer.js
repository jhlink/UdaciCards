import React from 'react';
import { StyleSheet, View } from 'react-native';

import MainNavigator from './MainNavigator';
import AppStatusBar from './AppStatusBar';
import { white } from '../utils/colors'; 

const AppContainer = () => {
  return (
    <View style={styles.container}>
      <AppStatusBar /> 
      <MainNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'flex-start',
  },
});

export default AppContainer;
