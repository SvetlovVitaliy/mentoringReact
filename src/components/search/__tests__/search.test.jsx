import React from 'react';
import { shallow } from 'enzyme';

import { Search } from '../';

describe('search', () => {
  it('Snapshot button', () => {
    const button = shallow(<Search />);

    expect(button).toMatchSnapshot();
  })
})