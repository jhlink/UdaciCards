import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppContainer from '../components/AppContainer';
import { purgeQuizCount, fetchQuizCount, setNotificationFlag, clearNotificationFlag } from '../actions';

class AppLogic extends Component {
  state = {
    setFlag: true,
  }

  componentDidMount() {
    this.props.dispatch(setNotificationFlag());
    this.props.dispatch(fetchQuizCount()); 

    //  TEST_POINT
    //  To test the notification feature, uncomment the line below and reload the app.
    //    Doing so should result with a count of 0, setting the notification flag
    //    as seen in the code in utils/notificationAPI.js
    //this.props.dispatch(purgeQuizCount()); 
  }

  componentDidUpdate() {
    const { count } = this.props;
    const { setFlag } = this.state;
    if ( count > 0 && setFlag ) {
      this.props.dispatch(clearNotificationFlag());   
      this.setState({ setFlag: false });
    }
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

function mapStateToProps( state ) {
  const { count } = state.quizReducer;
  
  return { count };
}

export default connect(mapStateToProps)(AppLogic);
