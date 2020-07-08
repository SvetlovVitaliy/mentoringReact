import { createSelector } from 'reselect';

import { IMoviesData, IMovie } from './utils';

export const getMoviesDataState = (state: { maviesData: IMoviesData }) => state.maviesData;

export const getMovieDetails = createSelector(
  getMoviesDataState,
  (state: IMoviesData): IMovie => state.movieId,
);

export const getMovieList = createSelector(
  getMoviesDataState,
  (state: IMoviesData): IMovie[] => state.moviesList,
);
