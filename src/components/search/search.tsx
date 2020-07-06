import React, { FunctionComponent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { ButtonRadio, ButtonSearch } from '../';
import { mockSearchButton } from '../../../mock/mock-data';

import './search.scss';
import { setSearchString, setSearchBy } from '../../services/setting/action';
import { getSearchString, getQueryParams, getSearchBy } from '../../services/setting/selector';
import { fetchMoviesList } from '../../services/api/action';
import { TSortingOrder } from '../../services/setting/utils';

const SEARCH_TITLE = 'FIND YOUR MOVIE';
const SEARCH_BY = 'SEARCH BY';

export interface ISearchProps {
  dispatch: Function;
  sortOrder: TSortingOrder;
}

export const Search: FunctionComponent<ISearchProps> = ({ 
  dispatch,
  sortOrder,
}) => {
  const value = useSelector(getSearchString);
  const queryString = useSelector(getQueryParams);
  const searchBy = useSelector(getSearchBy);
  const history = useHistory();

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
      const textTrim = value.trim();
      if (textTrim) {
        history.push(`/search${queryString[0]}`);
      } else {
        history.push('/');
      }
    },
    [dispatch, queryString, history, searchBy],
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
        <ButtonRadio buttons={mockSearchButton} onPress={handleRadioButton} activeTab={searchBy} sortOrder={sortOrder} />
      </div>
    </div>
  );
};
