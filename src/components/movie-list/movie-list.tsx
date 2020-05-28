import React, { FunctionComponent } from 'react';

import './styles.scss';
import { Poster } from '../poster-film';

const mockMovies = [1, 2, 3, 4, 5];

interface IMovieListProps { }

export const MovieList: FunctionComponent<IMovieListProps> = () => {
  return (
    <div className={'movie-list'}>
      {mockMovies.map(() => <Poster />)}
    </div>
  );
};
