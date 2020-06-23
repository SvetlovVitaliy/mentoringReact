import React from 'react';
import { shallow } from 'enzyme';

import { HomeButton } from '../';

describe('home-button', () => {
  it('Snapshot button', () => {
    const button = shallow(<HomeButton />);

    expect(button).toMatchSnapshot();
  })
})