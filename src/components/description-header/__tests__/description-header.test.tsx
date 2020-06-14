import React from 'react';
import { shallow } from 'enzyme';

import { DescriptionHeader } from '../';

describe('description-header', () => {
  it('Snapshot button', () => {
    const button = shallow(<DescriptionHeader />);

    expect(button).toMatchSnapshot();
  })
})