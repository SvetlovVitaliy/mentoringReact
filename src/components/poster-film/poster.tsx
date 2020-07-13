import React, { FunctionComponent } from 'react';

import { Image } from '../image-components';
import { FilmInfo } from './film-info';
import { PosterWrapper } from './poster-wrapper';
import { IMovie } from '../../services/api/utils';

import './poster-film.scss';

interface IPosterProps {
  movie: IMovie;
  queryString: string[];
}

export const Poster: FunctionComponent<IPosterProps> = ({
  movie: { poster_path, genres, title, release_date, id },
  queryString,
}) => {
  return (
    <PosterWrapper id={id} genres={genres} queryString={queryString}>
      <Image url={poster_path} classNames={'poster_image'} />
      <FilmInfo year={release_date} gengre={genres[0]} title={title} />
    </PosterWrapper>
  );
};
