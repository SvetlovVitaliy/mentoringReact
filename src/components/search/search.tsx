import React, { FunctionComponent, useCallback, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { isUndefined } from 'lodash';

import { ButtonRadio, ButtonSearch } from '../';
import { mockSearchButton } from '../../../mock/mock-data';

import './search.scss';
import { setSearchString, setSearchBy } from '../../services/setting/action';
import { TSortingOrder, TSortingType } from '../../services/setting/utils';
import { getHistoryParams } from './utils';

const SEARCH_TITLE = 'FIND YOUR MOVIE';
const SEARCH_BY = 'SEARCH BY';

export interface ISearchProps {
  dispatch: Function;
  sortOrder: TSortingOrder;
  value: string;
  queryString: string[];
  searchBy: TSortingType;
}

export const Search: FunctionComponent<ISearchProps> = ({
  dispatch,
  sortOrder,
  value,
  queryString,
  searchBy,

}) => {
  const inputRef = useRef<any>(null);
  const history = useHistory();

  const handleChange = useCallback(
    ({ currentTarget: { value } }) => {
      const textTrim = value.trim();
      if (textTrim) {
        dispatch(setSearchString, textTrim);
      }
    },
    [dispatch],
  );

  const handleRadioButton = useCallback(
    (type: string) => {
      dispatch(setSearchBy, type);
    },
    [dispatch],
  );

  const handleSubmit = useCallback(
    () => {
      history.push(getHistoryParams(queryString[0], value));
    },
    [dispatch, queryString, history, value],
  );

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <div className={'search'}>
      <div className={'search_header'}>
        {SEARCH_TITLE}
      </div>
      <div className={'search_row'}>
        <input
          className={'search_input'}
          maxLength={50}
          max={10000000}
          min={0}
          placeholder={'SEARCH'}
          type={'search'}
          onChange={handleChange}
          value={value}
          ref={inputRef}
        />
        <ButtonSearch onPress={handleSubmit} />
      </div>
      <div className={'search_radio'}>
        <p className={'search_radio__text'}>{SEARCH_BY}</p>
        <ButtonRadio buttons={mockSearchButton} onPress={handleRadioButton} activeTab={searchBy} sortOrder={sortOrder} />
      </div>
    </div>
  );
};
