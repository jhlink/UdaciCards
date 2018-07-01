import React, { Component }  from 'react';
import { StyleSheet, View } from 'react-native';

import MainNavigator from './MainNavigator';
import AppStatusBar from './AppStatusBar';
import { white } from '../utils/colors'; 

export default class AppContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar /> 
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'flex-start',
  },
});
