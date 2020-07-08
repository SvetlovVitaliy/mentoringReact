import { Dispatch } from 'redux';

import {
  RESPONSE_MOVIES_LIST,
  IResponseFetchMoviesList,
  RESPONSE_MOVIE_BY_ID,
  IResponseFetchMovieById,
} from './actionType';

export const responseFetchMoviesList = (movies: any): IResponseFetchMoviesList => ({
  type: RESPONSE_MOVIES_LIST,
  data: {
    ...movies,
  },
});

export const fetchMoviesList = (query: string = ''): Function => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`https://reactjs-cdp.herokuapp.com/movies${query}`);
    const movies = await response.json();
    dispatch(responseFetchMoviesList(movies));
  };
};

export const responseFetchMovieById = (movie: any): IResponseFetchMovieById => ({
  type: RESPONSE_MOVIE_BY_ID,
  data: {
    ...movie,
  },
});

export const fetchMovieBy = (id: string = '337167'): Function => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`);
    const movie = await response.json();
    dispatch(responseFetchMovieById(movie));
  };
};