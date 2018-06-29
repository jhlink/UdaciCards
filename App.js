import React, { Component }  from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import MainNavigator from './components/MainNavigator';
import AppStatusBar from './components/AppStatusBar';
import { white } from './utils/colors'; 
import reducer from './reducers';

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
