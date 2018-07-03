import * as NotificationAPI from '../utils/NotificationAPI';

// Actions
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';
export const SET_NOTIFICATION = 'SET_NOTIFICATION';

// Action Creators
const clearNotification = ( ) => {
  return {
    type:CLEAR_NOTIFICATION 
  };
};

const setNotification = ( ) => {
  return {
    type: SET_NOTIFICATION 
  };
};

