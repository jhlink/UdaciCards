import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import NewQuestionView from '../components/NewQuestionView';

class NewQuestionViewLogic extends Component { 
  toDeckView = () => {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    return (
      <NewQuestionView />
    ); 
  }
}

export default NewQuestionViewLogic;

