import React, { FunctionComponent, useCallback } from 'react';

import { SEARCH } from './utils';
import './button-search.scss';

interface IButtonSearchProps {
  onPress: () => void;
}

export const ButtonSearch: FunctionComponent<IButtonSearchProps> = ({ onPress }) => {
  const onClick = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <div className={'button-search'} onClick={(onClick)}>
      <p className={'button-search_title'}>{SEARCH}</p>
    </div>
  );
};
