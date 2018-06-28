import React, { Component }  from 'react';
import { StyleSheet, View } from 'react-native';
import MainNavigator from './components/MainNavigator';
import AppStatusBar from './components/AppStatusBar';
import { white } from './utils/colors'; 

export default class App extends Component {
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
