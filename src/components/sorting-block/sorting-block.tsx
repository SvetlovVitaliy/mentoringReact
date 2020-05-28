import React, { FunctionComponent, useCallback, useState } from 'react';

import { ButtonRadio } from '../button-radio/button-radio';
import './styles.scss';

export enum TSortAscDesc {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum TSortType {
  RELEASE_DATE = 'RELEASE DATE',
  RATING = 'RATING',
}

const mock = [
  {
    id: 'release_date',
    title: TSortType.RELEASE_DATE,
  },
  {
    id: 'rating',
    title: TSortType.RATING,
  },
];

interface ISortingBlockProps { }

export const SortingBlock: FunctionComponent<ISortingBlockProps> = () => {
  const [sortType, setSortType] = useState<string>(TSortType.RELEASE_DATE);

  const handleRadioButton = useCallback(
    (type: string) => {
      setSortType(type);
      console.log('sort type:', type);
    },
    [],
  );

  return (
    <div className={'sorting-block'}>
      <div className={'sorting-block_text'}>
        {'SORT BY'}
      </div>
      <ButtonRadio buttons={mock} onPress={handleRadioButton} />
    </div>
  );
};
