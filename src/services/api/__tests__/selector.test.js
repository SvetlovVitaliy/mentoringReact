import deepFreeze from 'deep-freeze';

import { initialState } from '../utils';
import { getMovieDetails, getMovieList } from '../selector';

describe('moviesData request', () => {
  const movie = {
    id: 1,
  };
  const movieList = [movie, { ...movie, id: 2 }]

  it('getMovieDetails should return movie', () => {
    const newState = { ...initialState, movieId: movie };
    expect(getMovieDetails(deepFreeze({ maviesData: newState }))).toEqual(movie);
  });

  it('getMovieList should return moviesList', () => {
    const newState = { ...initialState, moviesList: movieList };
    expect(getMovieList(deepFreeze({ maviesData: newState }))).toEqual(movieList);
  });
});
