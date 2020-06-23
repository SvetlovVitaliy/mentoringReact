import React from 'react';
import { shallow } from 'enzyme';

import { Poster } from '../';

describe('poster', () => {
  it('Snapshot button', () => {
    const button = shallow(<Poster />);

    expect(button).toMatchSnapshot();
  })
})