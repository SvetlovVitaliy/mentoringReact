import React from 'react';
import { shallow } from 'enzyme';

import { SearchView } from '../search-view';

describe('search', () => {
  it('Snapshot button', () => {
    const button = shallow(<SearchView />);

    expect(button).toMatchSnapshot();
  })
})