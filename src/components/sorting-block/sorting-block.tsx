import React, { FunctionComponent, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ButtonRadio } from '../';
import { mockSortButton } from '../../../mock/mock-data';
import { setSortBy, setSortOrder } from '../../services/setting/action';
import { getSortBy, getSortOrder } from '../../services/setting/selector';
import { TSortingOrder } from '../../services/setting/utils';

import './sorting-block.scss';

export interface ISortingBlockProps {
  onclickRadioButton: Function;
}

export const SortingBlock: FunctionComponent<ISortingBlockProps> = ({
  onclickRadioButton,
}) => {
  const sortBy = useSelector(getSortBy);

  const handleButton = useCallback((str: any) => {
    onclickRadioButton(str);
  }, [sortBy]);

  return (
    <div className={'sorting-block'}>
      <div className={'sorting-block_text'}>
        {'SORT BY'}
      </div>
      <ButtonRadio buttons={mockSortButton} onPress={handleButton} activeTab={sortBy} />
    </div>
  );
};
