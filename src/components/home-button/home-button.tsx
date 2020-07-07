import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router';

import './home-button.scss';
import { getHistoryParams } from '../search/utils';

const NETFLIX = 'netflix';
const ROULETTE = 'roulette';

interface IHomeButtonProps {
  queryString: string[];
  value: string;
}

export const HomeButton: FunctionComponent<IHomeButtonProps> = ({
  queryString,
  value,
}) => {
  const history = useHistory();
  const handleButton = useCallback(
    () => {
      history.push(getHistoryParams(queryString[0], value));
    },
    [history, queryString, value],
  )

  return (
    <div className={'home-button'} onClick={handleButton}>
      <b>{NETFLIX}</b>
      {ROULETTE}
    </div>
  );
};
