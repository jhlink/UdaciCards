import React, { Component }  from 'react';
import { StyleSheet, View } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import MainNavigator from './components/MainNavigator';
import AppStatusBar from './components/AppStatusBar';
import { white } from './utils/colors'; 

export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore( reducer ) } >
        <View style={styles.container}>
          <AppStatusBar /> 
          <MainNavigator />
        </View>
      </Provider>
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
