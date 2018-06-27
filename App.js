import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QuizView from './components/QuizView';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 20 }}/>
        <QuizView />
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
