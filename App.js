import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 20 }}/>
        <DeckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
