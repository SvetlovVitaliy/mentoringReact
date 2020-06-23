import deepFreeze from 'deep-freeze';

import { initialState } from '../utils';
import { maviesData } from '../reducer';
import { responseFetchMoviesList, responseFetchMovieById } from '../action';

describe('reducer moviesData', () => {
  const movie = {
    id: 1,
  };
  const movieList = [movie, { ...movie, id: 2 }]

  it('RESPONSE_MOVIES_LIST should safe correct data', () => {
    const newState = maviesData(
      deepFreeze(initialState),
      responseFetchMoviesList({ data: movieList }),
    );
    expect(newState.moviesList).toEqual(movieList);
  });

  it('RESPONSE_MOVIE_BY_ID should safe correct data', () => {
    const newState = maviesData(
      deepFreeze(initialState),
      responseFetchMovieById(movie),
    );
    expect(newState.movieId).toEqual(movie);
  });
});
