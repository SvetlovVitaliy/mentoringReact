import React from 'react';
import { shallow } from 'enzyme';

import { MovieListView } from '../movie-list-view';

describe('movie-list', () => {
  it('Snapshot button', () => {
    const button = shallow(<MovieListView />);

    expect(button).toMatchSnapshot();
  })
})