import React, { FunctionComponent, useCallback } from 'react';

import { ButtonRadioView } from '../button-radio';
import { mockSortButton } from '../../../mock/mock-data';
import { TSortingOrder, TSortingType } from '../../services/setting/utils';

import './sorting-block.scss';

export interface ISortingBlockProps {
  onclickRadioButton: Function;
  changeSorting: Function;
  sortOrder: TSortingOrder;
  sortBy: TSortingType;
}

export const SortingBlockView: FunctionComponent<ISortingBlockProps> = ({
  onclickRadioButton,
  sortOrder,
  sortBy,
  changeSorting,
}) => {
  const handleButton = useCallback((str: any) => {
    onclickRadioButton(str);
  }, [sortBy]);

  return (
    <div className={'sorting-block'}>
      <div className={'sorting-block_text'}>
        {'SORT BY'}
      </div>
      <ButtonRadioView
        buttons={mockSortButton}
        onPress={handleButton}
        activeTab={sortBy}
        sortOrder={sortOrder}
        changeSorting={changeSorting}
      />
    </div>
  );
};
