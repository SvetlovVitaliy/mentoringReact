import React from 'react';
import { shallow } from 'enzyme';

import { MovieList } from '../';

describe('movie-list', () => {
  it('Snapshot button', () => {
    const button = shallow(<MovieList />);

    expect(button).toMatchSnapshot();
  })
})