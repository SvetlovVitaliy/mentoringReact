import React, { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import { getMovieList } from '../../services/api/selector';
import { fetchMoviesList, fetchMovieBy } from '../../services/api/action';
import { Poster } from '../';

import './movie-list.scss';

const notFound = 'NOT FOUND';

export interface IMovieListProps extends RouteComponentProps {
  fetchMovies: Function;
  id?: number;
}

export const MovieList: FunctionComponent<IMovieListProps> = ({ fetchMovies, location, id = '' }) => {
  const movies = useSelector(getMovieList);
  const queryParams = location ? location.search : '';

  useEffect(() => {
    if (id) {
      fetchMovies(fetchMovieBy, id);
      fetchMovies(fetchMoviesList, queryParams);
    } else if (queryParams) {
      fetchMovies(fetchMoviesList, queryParams);
    }
  }, [queryParams]);

  return (
    <div className={'movie-list'}>
      {!!queryParams && movies.map((item, index) => <Poster key={index} movie={item} />)}
      {movies.length === 0 && (
        <div className={'movie-list__wrapper'}>
          <div className={'movie-list__not-found'}>{notFound}</div>
        </div>
      )}
    </div>
  );
};
