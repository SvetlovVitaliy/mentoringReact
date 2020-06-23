import deepFreeze from 'deep-freeze';

import {
  getQueryParams,
  getSearchParams,
  getSearchString,
  getSearchBy,
  getSortBy,
  getSortOrder,
  getFilterByGenres,
} from '../selector';
import {
  initialState,
  TSearchType,
  TSortingType,
  TSortingOrder,
} from '../utils';

describe('settingReducer request', () => {
  const searchParams = {
    searchString: '123',
    sortOrder: TSortingOrder.ASK,
    filterByGenres: ['Drama', 'Action'],
    sortBy: TSortingType.RATING,
    searchBy: TSearchType.TITLE,
  };

  it('getSearchParams should return all search params', () => {
    expect(getSearchParams(deepFreeze({ settingData: { ...initialState, searchParams } }))).toEqual(searchParams);
  });

  it('getQueryParams should return array params and paramsSomeGenres', () => {
    const expected = [
      '?sortOrder=asc&search=123&searchBy=title&sortBy=rating',
      '?sortOrder=asc&searchBy=genres&sortBy=release_date&filter=Drama,Action',
    ];
    expect(getQueryParams.resultFunc(searchParams)).toEqual(expected);
  });

  it('getSearchString should return searchString', () => {
    expect(getSearchString.resultFunc(searchParams)).toBe(searchParams.searchString);
  });

  it('getSearchBy should return searchBy', () => {
    expect(getSearchBy.resultFunc(searchParams)).toBe(searchParams.searchBy);
  });

  it('getSortBy should return sortBy', () => {
    expect(getSortBy.resultFunc(searchParams)).toBe(searchParams.sortBy);
  });

  it('getSortOrder should return sortOrder', () => {
    expect(getSortOrder.resultFunc(searchParams)).toBe(searchParams.sortOrder);
  });

  it('getFilterByGenres should return sortOrder', () => {
    expect(getFilterByGenres.resultFunc(searchParams)).toEqual(searchParams.filterByGenres);
  });
});
