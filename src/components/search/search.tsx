import React, { FunctionComponent, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ButtonRadio, ButtonSearch } from '../';
import { mockSearchButton } from '../../../mock/mock-data';

import './search.scss';
import { setSearchString, setSearchBy } from '../../services/setting/action';
import { getSearchString, getQueryParams, getSearchBy } from '../../services/setting/selector';
import { fetchMoviesList } from '../../services/api/action';

const SEARCH_TITLE = 'FIND YOUR MOVIE';
const SEARCH_BY = 'SEARCH BY';

export interface ISearchProps {
  dispatch: Function;
}

export const Search: FunctionComponent<ISearchProps> = ({ dispatch }) => {
  const value = useSelector(getSearchString);
  const queryString = useSelector(getQueryParams);
  const searchBy = useSelector(getSearchBy);

  const handleChange = useCallback(
    ({ currentTarget: { value } }) => {
      dispatch(setSearchString, value);
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
      dispatch(fetchMoviesList, queryString[0]);
    },
    [dispatch, queryString],
  );

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
        />
        <ButtonSearch onPress={handleSubmit} />
      </div>
      <div className={'search_radio'}>
        <p className={'search_radio__text'}>{SEARCH_BY}</p>
        <ButtonRadio buttons={mockSearchButton} onPress={handleRadioButton} activeTab={searchBy} />
      </div>
    </div>
  );
};
