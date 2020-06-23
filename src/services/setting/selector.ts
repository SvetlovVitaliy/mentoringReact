import { createSelector } from 'reselect';

import {
  ISettingData,
  TSearchType,
  TSortingType,
  TSortingOrder,
} from './utils';

export const getSettingReducerState = (state: { settingData: ISettingData }) => state.settingData;

export const getSearchParams = createSelector(
  getSettingReducerState,
  (state: ISettingData) => state.searchParams,
);

export const getSearchString = createSelector(
  getSearchParams,
  (state): string => state.searchString,
);

export const getFilterByGenres = createSelector(
  getSearchParams,
  (state): string[] => state.filterByGenres,
);

export const getSearchBy = createSelector(
  getSearchParams,
  (state): TSearchType => state.searchBy,
);

export const getSortBy = createSelector(
  getSearchParams,
  (state): TSortingType => state.sortBy,
);

export const getSortOrder = createSelector(
  getSearchParams,
  (state): TSortingOrder => state.sortOrder,
);

export const getQueryParams = createSelector(
  getSearchParams,
  ({ sortOrder, sortBy, searchBy, filterByGenres, searchString }): string[] => {
    const params =
      `?sortOrder=${sortOrder}&search=${searchString}&searchBy=${searchBy}&sortBy=${sortBy}`;
    const paramsSomeGenres =
      `?sortOrder=asc&searchBy=genres&sortBy=release_date&filter=${filterByGenres.join(',')}`;
    return [params, paramsSomeGenres];
  },
);
