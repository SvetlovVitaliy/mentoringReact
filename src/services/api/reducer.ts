import {
  TApiActionType,
  RESPONSE_MOVIES_LIST,
  RESPONSE_MOVIE_BY_ID,
} from './actionType';
import { IMoviesData, initialState } from './utils';

export const maviesData = (state: IMoviesData = initialState, action: TApiActionType) => {
  switch (action.type) {
    case RESPONSE_MOVIES_LIST: {
      const { data } = action.data
      return { ...state, moviesList: data };
    }
    case RESPONSE_MOVIE_BY_ID: {
      const { data } = action;
      return { ...state, movieId: data };
    }
  }
  return state;
}
