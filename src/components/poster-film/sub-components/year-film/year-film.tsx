import React, { FunctionComponent } from 'react';

interface IYearFilmProps {
  year: number;
}

export const YearFilm: FunctionComponent<IYearFilmProps> = ({
  year,
}) => {
  return (
    <div className={'poster_year'}>
      <p className={'poster_year__text'}>
        {year}
      </p>
    </div>
  );
};
