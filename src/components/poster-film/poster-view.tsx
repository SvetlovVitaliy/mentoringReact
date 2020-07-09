import React, { FunctionComponent } from 'react';

import { FilmInfo, PosterImage, PosterWrapper } from './sub-components';

import './poster-film.scss';
import { IMovie } from '../../services/api/utils';

interface IPosterProps {
  movie: IMovie;
  queryString: string[];
}

export const PosterView: FunctionComponent<IPosterProps> = ({
  movie: { poster_path, genres, title, release_date, id },
  queryString,
}) => {
  return (
    <PosterWrapper id={id} genres={genres} queryString={queryString}>
      <PosterImage url={poster_path} />
      <FilmInfo year={release_date} gengre={genres[0]} title={title} />
    </PosterWrapper>
  );
};
