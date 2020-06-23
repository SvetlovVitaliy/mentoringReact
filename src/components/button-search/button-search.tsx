import React, { FunctionComponent, useCallback } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { fetchMoviesList, fetchMovieBy } from '../../services/api/action';

import './button-search.scss';

const SEARCH = 'SEARCH';

const mapDispatchToProps = (dispatch: Dispatch): IButtonSearchProps => {
  return {
    onPress: (action: any) => {
      dispatch(action());
    }
  }
}

interface IButtonSearchProps {
  onPress: (action: any) => void;
}

const ButtonSearchDispatch: FunctionComponent<IButtonSearchProps> = ({ onPress }) => {
  const onClick = useCallback(() => {
    onPress(fetchMovieBy);
  }, [onPress]);

  return (
    <div className={'button-search'} onClick={(onClick)}>
      <p className={'button-search_title'}>{SEARCH}</p>
    </div>
  );
};

export const ButtonSearch = connect(null, mapDispatchToProps)(ButtonSearchDispatch)
