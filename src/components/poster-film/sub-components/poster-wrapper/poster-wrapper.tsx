import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import { getQueryParams } from '../../../../services/setting/selector';

interface IPosterWrapperProps {
  id: number;
  genres: string[];
}

export const PosterWrapper: FunctionComponent<IPosterWrapperProps> = ({
  genres,
  id = '',
  children,
}) => {
  const history = useHistory();
  const queryString = useSelector(getQueryParams);
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
