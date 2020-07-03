import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import { getQueryParams } from '../../../../services/setting/selector';

interface IPosterWrapperProps {
  id: number;
}

export const PosterWrapper: FunctionComponent<IPosterWrapperProps> = ({
  id = '',
  children,
}) => {
  const history = useHistory();
  const queryString = useSelector(getQueryParams);
  const handleClick = useCallback(() => {
    if (id) {
      history.push(`/details/${id}${queryString[1]}`);
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
