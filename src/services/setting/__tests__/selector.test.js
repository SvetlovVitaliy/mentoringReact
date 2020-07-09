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

describe('settingSelector request', () => {
  const searchParams = {
    searchString: '123',
    sortOrder: TSortingOrder.ASK,
    filterByGenres: ['Drama', 'Action'],
    sortBy: TSortingType.RATING,
    searchBy: TSearchType.TITLE,
  };

  describe('getSearchParams', () => {
    it('should return all search params', () => {
      expect(getSearchParams(deepFreeze({ settingReducer: { ...initialState, searchParams } }))).toEqual(searchParams);
    });
  });

  describe('getQueryParams', () => {
    it('should return array params and paramsSomeGenres', () => {
      const expected = [
        '?sortOrder=asc&search=123&searchBy=title&sortBy=rating',
        '?sortOrder=asc&searchBy=genres&sortBy=release_date&filter=Drama,Action',
      ];
      expect(getQueryParams.resultFunc(searchParams)).toEqual(expected);
    });
  });

  describe('getSearchString', () => {
    it('should return searchString', () => {
      expect(getSearchString.resultFunc(searchParams)).toBe(searchParams.searchString);
    });
  });

  describe('getSearchBy', () => {
    it('should return searchBy', () => {
      expect(getSearchBy.resultFunc(searchParams)).toBe(searchParams.searchBy);
    });
  });

  describe('getSortBy', () => {
    it('should return sortBy', () => {
      expect(getSortBy.resultFunc(searchParams)).toBe(searchParams.sortBy);
    });
  });

  describe('getSortOrder', () => {
    it('should return sortOrder', () => {
      expect(getSortOrder.resultFunc(searchParams)).toBe(searchParams.sortOrder);
    });
  });

  describe('getFilterByGenres', () => {
    it('should return sortOrder', () => {
      expect(getFilterByGenres.resultFunc(searchParams)).toEqual(searchParams.filterByGenres);
    });
  });
});
