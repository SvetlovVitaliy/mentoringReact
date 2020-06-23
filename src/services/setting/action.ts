import {
  SET_SEARCH_STRING,
  SET_SORT_ORDER,
  SET_SORT_BY,
  SET_SEARCH_BY,
  SET_FILTER_BY_GENRES,
  ISetSearchString,
  ISetSortOrder,
  ISetSortBy,
  ISetSearchBy,
  ISetFilterByGenres,
} from './actionType';
import {
  TSearchType,
  TSortingType,
  TSortingOrder,
} from './utils';

export const setSearchString = (searchString: string): ISetSearchString => ({
  type: SET_SEARCH_STRING,
  payload: {
    searchString,
  },
});

export const setSortOrder = (sortOrder: TSortingOrder): ISetSortOrder => ({
  type: SET_SORT_ORDER,
  payload: {
    sortOrder,
  },
});

export const setSortBy = (sortBy: TSortingType): ISetSortBy => ({
  type: SET_SORT_BY,
  payload: {
    sortBy,
  },
});

export const setSearchBy = (searchBy: TSearchType): ISetSearchBy => ({
  type: SET_SEARCH_BY,
  payload: {
    searchBy,
  },
});

export const setFilterByGenres = (filter: string[]): ISetFilterByGenres => ({
  type: SET_FILTER_BY_GENRES,
  payload: {
    filter,
  },
});
