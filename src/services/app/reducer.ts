import { combineReducers } from 'redux';
import { maviesData } from '../api/reducer';
import { settingReducer } from '../setting/reducer';

export const rootReducer = combineReducers({
  maviesData,
  settingReducer,
});