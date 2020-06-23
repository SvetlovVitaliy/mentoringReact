import { ISettingData, initialState } from './utils';
import {
  TSettingActionType,
  SET_SEARCH_STRING
} from './actionType';

export const settingReducer = (state: ISettingData = initialState, action: TSettingActionType) => {
  switch (action.type) {
    case SET_SEARCH_STRING: {
      return state;
    }
  }
  return state;
}
