import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../';

describe('header', () => {
  it('Snapshot button', () => {
    const button = shallow(<Header />);

    expect(button).toMatchSnapshot();
  })
})