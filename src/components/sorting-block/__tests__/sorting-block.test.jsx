import React from 'react';
import { shallow } from 'enzyme';

import { SortingBlock } from '../';

describe('sorting-block', () => {
  it('Snapshot button', () => {
    const button = shallow(<SortingBlock />);

    expect(button).toMatchSnapshot();
  })
})