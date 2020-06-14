import React, { FunctionComponent, useCallback, useState } from 'react';

import { ButtonRadio } from '../';
import { TSortType } from './types';
import { mockSortButton } from '../../../mock/mock-data';

import './sorting-block.scss';

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
      <ButtonRadio buttons={mockSortButton} onPress={handleRadioButton} />
    </div>
  );
};
