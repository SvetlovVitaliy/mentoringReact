import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import { Poster } from '../';

import './movie-list.scss';
import { getMovieList } from '../../services/api/selector';

interface IMovieListProps { }

export const MovieList: FunctionComponent<IMovieListProps> = () => {
  const movies = useSelector(getMovieList);

  return (
    <div className={'movie-list'}>
      {movies.map((item, index) => <Poster key={index} movie={item} />)}
    </div>
  );
};
