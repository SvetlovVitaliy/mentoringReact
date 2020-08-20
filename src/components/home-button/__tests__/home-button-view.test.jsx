import React from 'react';
import { shallow } from 'enzyme';

import { HomeButtonView } from '../home-button-view';

describe('home-button', () => {
  it('Snapshot button', () => {
    const button = shallow(<HomeButtonView />);

    expect(button).toMatchSnapshot();
  })
})