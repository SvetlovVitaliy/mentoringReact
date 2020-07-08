import {
  TSearchType,
  TSortingType,
  TSortingOrder,
} from './utils';

export const SET_SEARCH_STRING = 'SET_SEARCH_STRING';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_SEARCH_BY = 'SET_SEARCH_BY';
export const SET_FILTER_BY_GENRES = 'SET_FILTER_BY_GENRES';

export interface ISetSearchString {
  type: typeof SET_SEARCH_STRING;
  payload: {
    searchString: string;
  };
};

export interface ISetSortOrder {
  type: typeof SET_SORT_ORDER;
  payload: {
    sortOrder: TSortingOrder;
  };
};

export interface ISetSortBy {
  type: typeof SET_SORT_BY;
  payload: {
    sortBy: TSortingType;
  };
};

export interface ISetSearchBy {
  type: typeof SET_SEARCH_BY;
  payload: {
    searchBy: TSearchType;
  };
};

export interface ISetFilterByGenres {
  type: typeof SET_FILTER_BY_GENRES;
  payload: {
    filter: string[];
  };
};

export type TSettingActionType =
  | ISetSortOrder
  | ISetSortBy
  | ISetSearchBy
  | ISetFilterByGenres
  | ISetSearchString;