import React, { Component }  from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import MainNavigator from './components/MainNavigator';
import AppStatusBar from './components/AppStatusBar';
import { white } from './utils/colors'; 
import reducer from './reducers';
import { checkQuizCount, setQuizCount, clearQuizCount } from './utils/notifHelper';
import TextButton from './components/TextButton';

export default class App extends Component {
  componentDidMount() {
    checkQuizCount();    
  }

  tagUr = () => {
    clearQuizCount();
  }

  tagMur = () => {
    setQuizCount(1); 
  }

  render() {
    return (
      <Provider store={ createStore( reducer ) } >
        <View style={styles.container}>
          <AppStatusBar /> 
          <MainNavigator />
          <TextButton
            onPress={this.tagUr}
          >
         get 
          </TextButton>
          <TextButton
            onPress={this.tagMur}
          >
         set 
          </TextButton>
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
