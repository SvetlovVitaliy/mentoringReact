import React, { FunctionComponent } from 'react';

import './button-search.scss';

const SEARCH = 'SEARCH';

interface IButtonSearchProps {
  onPress: () => void;
}

export const ButtonSearch: FunctionComponent<IButtonSearchProps> = ({
  onPress,
}) => {
  return (
    <div className={'button-search'} onClick={onPress}>
      <p className={'button-search_title'}>{SEARCH}</p>
    </div>
  );
};
