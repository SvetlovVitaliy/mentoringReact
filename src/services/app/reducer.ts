import { combineReducers } from 'redux';

const todos = (state = [], action: any) => {
  switch (action.type) {
    case "ACTION_ELEMENT": {
      return {
        ...state,
        payload: action.payload,
      };
    }
  }
  return state;
}

export default combineReducers({ todos })