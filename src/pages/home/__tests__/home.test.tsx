import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from '../../';

describe('home-page', () => {
  it('Snapshot button', () => {
    const button = shallow(<HomePage />);

    expect(button).toMatchSnapshot();
  })
})