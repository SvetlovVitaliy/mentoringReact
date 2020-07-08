import { AnyAction } from 'redux';

export const RESPONSE_MOVIES_LIST = 'RESPONSE_MOVIES_LIST';
export const RESPONSE_MOVIE_BY_ID = 'RESPONSE_MOVIE_BY_ID';

interface ApiActionResponse extends AnyAction {
  data: any;
}

export interface IResponseFetchMoviesList extends ApiActionResponse {
  type: typeof RESPONSE_MOVIES_LIST;
};

export interface IResponseFetchMovieById extends ApiActionResponse {
  type: typeof RESPONSE_MOVIE_BY_ID;
};

export type TApiActionType =
  | IResponseFetchMovieById
  | IResponseFetchMoviesList;