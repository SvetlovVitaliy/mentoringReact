import React from 'react';
import { shallow } from 'enzyme';

import { ButtonRadioView } from '../button-radio-view';
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
    const button = shallow(<ButtonRadioView buttons={mockSortButton} onPress={onPress} />);

    expect(button).toMatchSnapshot();
  })
})