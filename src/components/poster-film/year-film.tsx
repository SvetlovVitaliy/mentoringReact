import React, { FunctionComponent } from 'react';

interface IYearFilmProps {
  year: string;
}

export const YearFilm: FunctionComponent<IYearFilmProps> = ({
  year,
}) => {
  const event = new Date(year);
  return (
    <div className={'poster_year'}>
      <p className={'poster_year__text'}>
        {event.getFullYear()}
      </p>
    </div>
  );
};
