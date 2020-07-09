import React from 'react';
import { shallow } from 'enzyme';

import { DescriptionHeaderView } from '../description-header-view';

describe('description-header', () => {
  it('Snapshot button', () => {
    const button = shallow(<DescriptionHeaderView />);

    expect(button).toMatchSnapshot();
  })
})