import React, { FunctionComponent, useCallback, useState } from 'react';

import { ButtonRadio } from '../button-radio/button-radio';
import { ButtonSearch } from '../button-search/button-search';
import './styles.scss';

const SEARCH_TITLE = 'FIND YOUR MOVIE';
const SEARCH_BY = 'SEARCH BY';
export enum TMovie {
  TITLE = 'TITLE',
  GENGRE = 'GENGRE',
}
const mock = [
  {
    id: 'title',
    title: TMovie.TITLE,
  },
  {
    id: 'gengre',
    title: TMovie.GENGRE,
  },
];

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
        <ButtonSearch onPress={handleSubmit} />
      </div>
      <div className={'search_radio'}>
        <p className={'search_radio__text'}>{SEARCH_BY}</p>
        <ButtonRadio buttons={mock} onPress={handleRadioButton} />
      </div>
    </div>
  );
};
