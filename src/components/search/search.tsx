import React, { FunctionComponent, useCallback, useState } from 'react';

import { ButtonRadio, ButtonSearch } from '../';
import { TMovie } from './types';
import { mockSearchButton } from '../../../mock/mock-data';

import './search.scss';

const SEARCH_TITLE = 'FIND YOUR MOVIE';
const SEARCH_BY = 'SEARCH BY';

interface ISearchProps { }

export const Search: FunctionComponent<ISearchProps> = () => {
  const [value, setValue] = useState<string>('');
  const [filterType, setFilterType] = useState<string>(TMovie.TITLE);

  const handleChange = useCallback(
    event => {
      setValue(event.currentTarget.value);
    },
    [],
  );

  const handleRadioButton = useCallback(
    (type: string) => {
      setFilterType(type);
    },
    [],
  );

  const handleSubmit = useCallback(
    () => {
      console.log('submit', value, filterType)
    },
    [value, filterType],
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
        <ButtonSearch />
      </div>
      <div className={'search_radio'}>
        <p className={'search_radio__text'}>{SEARCH_BY}</p>
        <ButtonRadio buttons={mockSearchButton} onPress={handleRadioButton} />
      </div>
    </div>
  );
};
