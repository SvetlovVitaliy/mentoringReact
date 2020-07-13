import React from 'react';
import { shallow } from 'enzyme';

import { ButtonRadio } from '../button-radio';
import { TSortType } from '../../sorting-block/types';

describe('button-radio', () => {
  const mockSortButton = [
    {
      id: 'release_date',
      title: TSortType.RELEASE_DATE,
    },
    {
      id: 'rating',
      title: TSortType.RATING,
    },
  ];
  const onPress = jest.fn();
  const buttons = shallow(<ButtonRadio buttons={mockSortButton} onPress={onPress} />);

  describe('snapshot', () => {
    it('Snapshot button', () => {
      expect(buttons).toMatchSnapshot();
    });
  });
});