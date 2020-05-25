import React, { FunctionComponent } from 'react';

import { PosterWrapper } from './poster-wrapper';
import { FilmInfo } from './film-info';
import { PosterImage } from './poster-image';
import './styles.scss';

interface IPosterProps { }

export const Poster: FunctionComponent<IPosterProps> = (props) => {
  return (
    <PosterWrapper>
      <PosterImage url={''} />
      <FilmInfo year={2020} gengre={'Drama'} title={'X-man'} />
    </PosterWrapper>
  );
};
