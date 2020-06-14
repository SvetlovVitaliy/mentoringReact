import React, { FunctionComponent, useCallback } from 'react';
import { connect } from 'react-redux';

import { fetchSomething } from '../../services/app/action';

import './button-search.scss';

const SEARCH = 'SEARCH';

const mapStateToProps = (state: any) => {
  return {
    todos: () => { },
  }
}

const mapDispatchToProps = (dispatch: any) => {
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
    onPress(fetchSomething);
  }, [onPress]);

  return (
    <div className={'button-search'} onClick={(onClick)}>
      <p className={'button-search_title'}>{SEARCH}</p>
    </div>
  );
};

export const ButtonSearch = connect(mapStateToProps, mapDispatchToProps)(ButtonSearchDispatch)
