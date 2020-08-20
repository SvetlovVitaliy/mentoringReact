import React, { FunctionComponent } from 'react';

import { YearFilm } from './year-film';

interface IFilmInfoProps {
  title: string;
  year: string;
  gengre: string;
}

export const FilmInfo: FunctionComponent<IFilmInfoProps> = ({
  title,
  year,
  gengre,
}) => {
  return (
    <div className={'poster_film-info'}>
      <div className={'poster_film-info__title-year'}>
        <p className={'poster_film-info__title'}>
          {title}
        </p>
        <YearFilm year={year} />
      </div>
      <p className={'poster_film-info__gengre'}>
        {gengre}
      </p>
    </div>
  );
};
