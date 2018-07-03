import React, { Component } from 'react';
import AppContainer from '../components/AppContainer';
import { purgeQuizCount, fetchQuizCount, setNotificationFlag, clearNotificationFlag } from '../actions';

export default class AppLogic extends Component {
  componentDidMount() {
   
  }

  render() {
    return (
      <AppContainer />
    );
  }
}
