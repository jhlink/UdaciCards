import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewDeckView from './components/NewDeckView';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 20 }}/>
        <NewDeckView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
