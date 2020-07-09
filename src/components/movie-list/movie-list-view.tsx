import React, { FunctionComponent, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { RouteComponentProps } from 'react-router';
import { get, map } from 'lodash';

import { fetchMoviesList, fetchMovieBy } from '../../services/api/action';
import { Poster } from '../poster-film';

import './movie-list.scss';
import { IMovie } from 'src/services/api/utils';

const notFound = 'NOT FOUND';

export interface IMovieListProps extends RouteComponentProps {
  fetchMovies: Function;
  movies: IMovie[];
}

export const MovieListView: FunctionComponent<IMovieListProps> = ({ fetchMovies, location, match, movies = [] }) => {
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
      {!!queryParams && map(movies, (item, index) => {
        return (
          <CSSTransition
            in={true}
            unmountOnExit
            timeout={{ appear: 0, enter: 0, exit: 300 }}
            classNames='roll'
            appear
          >
            <Poster key={index} movie={item} />
          </CSSTransition>);
      })}
      {(movies.length === 0 || !queryParams) && (
        <div className={'movie-list__wrapper'} key={'not found'}>
          <div className={'movie-list__not-found'}>{notFound}</div>
        </div>
      )}
    </div>
  );
};
