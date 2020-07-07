import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router';

export interface IPosterWrapperProps {
  id: number;
  genres: string[];
  queryString: string;
}

export const PosterWrapper: FunctionComponent<IPosterWrapperProps> = ({
  queryString,
  genres,
  id = '',
  children,
}) => {
  const history = useHistory();
  const handleClick = useCallback(() => {
    const currentGenres = genres.join(',');
    if (id) {
      history.push(`/details/${id}${queryString[1]}${currentGenres}`);
    } else {
      history.push('/');
    }
  }, [history, id, queryString]);
  return (
    <div className={'poster_wrapper'} onClick={handleClick}>
      {children}
    </div>
  );
};
