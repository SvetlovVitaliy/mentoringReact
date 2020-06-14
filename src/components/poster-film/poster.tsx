import React, { FunctionComponent } from 'react';

import { FilmInfo, PosterImage, PosterWrapper } from './sub-components';

import './poster-film.scss';

interface IPosterProps { }

export const Poster: FunctionComponent<IPosterProps> = () => {
  return (
    <PosterWrapper>
      <PosterImage url={''} />
      <FilmInfo year={2020} gengre={'Drama'} title={'X-man'} />
    </PosterWrapper>
  );
};
