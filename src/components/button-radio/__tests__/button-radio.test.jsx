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

  it('Snapshot button', () => {
    const onPress = jest.fn();
    const button = shallow(<ButtonRadio buttons={mockSortButton} onPress={onPress} />);

    expect(button).toMatchSnapshot();
  })
})