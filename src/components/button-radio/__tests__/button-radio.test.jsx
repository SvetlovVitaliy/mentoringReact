import React from 'react';
import { shallow } from 'enzyme';

import { ButtonRadio } from '../';
import { mockSortButton } from '../../../../mock/mock-data';

describe('button-radio', () => {
  it('Snapshot button', () => {
    const onPress = jest.fn();
    const button = shallow(<ButtonRadio buttons={mockSortButton} onPress={onPress} />);

    expect(button).toMatchSnapshot();
  })
})