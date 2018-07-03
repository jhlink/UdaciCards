import {
  CLEAR_NOTIFICATION,
  SET_NOTIFICATION,
} from '../actions';

function notificationReducer (state = {}, action) {
  switch (action.type) {
    case CLEAR_NOTIFICATION: 
    case SET_NOTIFICATION: 
    default: 
      return state;
  }
}

export default notificationReducer;
