import React, { FunctionComponent, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { get, map } from 'lodash';

import { fetchMoviesList, fetchMovieBy } from '../../services/api/action';
import { Poster } from '../';

import './movie-list.scss';
import { IMovie } from 'src/services/api/utils';

const notFound = 'NOT FOUND';

export interface IMovieListProps extends RouteComponentProps {
  fetchMovies: Function;
  movies: IMovie[];
}

export const MovieList: FunctionComponent<IMovieListProps> = ({ fetchMovies, location, match, movies = [] }) => {
  const queryParams = get(location, 'search', '');
  const id = get(match, 'params.id', '');

  useEffect(() => {
    if (id) {
      fetchMovies(fetchMovieBy, id);
      fetchMovies(fetchMoviesList, queryParams);
    } else if (queryParams) {
      fetchMovies(fetchMoviesList, queryParams);
    }
  }, [queryParams, id]);

  return (
    <div className={'movie-list'}>
      {!!queryParams && map(movies, (item, index) => <Poster key={index} movie={item} />)}
      {(movies.length === 0 || !queryParams) && (
        <div className={'movie-list__wrapper'}>
          <div className={'movie-list__not-found'}>{notFound}</div>
        </div>
      )}
    </div>
  );
};
