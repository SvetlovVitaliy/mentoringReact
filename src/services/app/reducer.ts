import { combineReducers } from 'redux';

const todos = (state = [], action: any) => {
  console.log({ action });
  return state;
}

export default combineReducers({ todos })