import * as NotificationAPI from '../utils/notificationAPI';

// Actions
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';
export const SET_NOTIFICATION = 'SET_NOTIFICATION';

// Action Creators
const clearNotification = ( ) => {
  return {
    type: CLEAR_NOTIFICATION 
  };
};

const setNotification = ( ) => {
  return {
    type: SET_NOTIFICATION 
  };
};


// Thunks
export const clearNotificationFlag = ( ) => dispatch => {
  return NotificationAPI.clearLocalNotification()
    .then( ( ) => dispatch( clearNotification( )));
};

export const setNotificationFlag = ( ) => dispatch => {
  return NotificationAPI.setLocalNotification( )
    .then( ( ) => dispatch( setNotification( )));
};
