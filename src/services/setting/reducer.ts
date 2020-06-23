import { ISettingData, initialState } from './utils';
import {
  TSettingActionType,
  SET_SEARCH_STRING,
  SET_FILTER_BY_GENRES,
  SET_SEARCH_BY,
  SET_SORT_BY,
  SET_SORT_ORDER,
} from './actionType';

export const settingReducer = (state: ISettingData = initialState, action: TSettingActionType) => {
  switch (action.type) {
    case SET_SEARCH_STRING: {
      const { searchString } = action.payload;
      return { ...state, searchParams: { ...state.searchParams, searchString } };
    }
    case SET_FILTER_BY_GENRES: {
      const { filter: filterByGenres } = action.payload;
      return { ...state, searchParams: { ...state.searchParams, filterByGenres } };
    }
    case SET_SEARCH_BY: {
      const { searchBy } = action.payload;
      return { ...state, searchParams: { ...state.searchParams, searchBy } };
    }
    case SET_SORT_BY: {
      const { sortBy } = action.payload;
      return { ...state, searchParams: { ...state.searchParams, sortBy } };
    }
    case SET_SORT_ORDER: {
      const { sortOrder } = action.payload;
      return { ...state, searchParams: { ...state.searchParams, sortOrder } };
    }
  }
  return state;
}
