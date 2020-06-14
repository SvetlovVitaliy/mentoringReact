import React, { FunctionComponent } from 'react';

import { Poster } from '../';
import { mockMovies } from '../../../mock/mock-data';

import './movie-list.scss';

interface IMovieListProps { }

export const MovieList: FunctionComponent<IMovieListProps> = () => {
  return (
    <div className={'movie-list'}>
      {mockMovies.map(() => <Poster />)}
    </div>
  );
};
