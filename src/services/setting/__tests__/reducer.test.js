import deepFreeze from 'deep-freeze';

import {
  initialState,
  TSearchType,
  TSortingType,
  TSortingOrder,
} from '../utils';
import { settingReducer } from '../reducer';
import {
  setFilterByGenres,
  setSearchBy,
  setSortBy,
  setSearchString,
  setSortOrder,
} from '../action';

describe('reducer settingReducer', () => {
  it('SET_SEARCH_STRING should set search string', () => {
    const searchString = 'search';
    const newState = settingReducer(
      deepFreeze(initialState),
      setSearchString(searchString),
    );
    expect(newState.searchParams.searchString).toBe(searchString);
  });

  it('SET_FILTER_BY_GENRES should set filter by genres', () => {
    const filterByGenres = ['drama', 'action'];
    const newState = settingReducer(
      deepFreeze(initialState),
      setFilterByGenres(filterByGenres),
    );
    expect(newState.searchParams.filterByGenres).toEqual(filterByGenres);
  });

  it('SET_SEARCH_BY should set search by', () => {
    const searchBy = TSearchType.GENRES;
    const newState = settingReducer(
      deepFreeze(initialState),
      setSearchBy(searchBy),
    );
    expect(newState.searchParams.searchBy).toBe(searchBy);
  });

  it('SET_SORT_BY should set sort by', () => {
    const sortBy = TSortingType.RELEASE_DATE;
    const newState = settingReducer(
      deepFreeze(initialState),
      setSortBy(sortBy),
    );
    expect(newState.searchParams.sortBy).toBe(sortBy);
  });

  it('SET_SORT_ORDER should set sort order', () => {
    const sortOrder = TSortingOrder.DESC;
    const newState = settingReducer(
      deepFreeze(initialState),
      setSortOrder(sortOrder),
    );
    expect(newState.searchParams.sortOrder).toBe(sortOrder);
  });
});
