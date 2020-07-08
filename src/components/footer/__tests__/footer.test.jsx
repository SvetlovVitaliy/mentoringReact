import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from '../';

describe('footer', () => {
  it('Snapshot button', () => {
    const button = shallow(<Footer />);

    expect(button).toMatchSnapshot();
  })
})