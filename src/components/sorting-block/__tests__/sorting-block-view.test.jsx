import React from 'react';
import { shallow } from 'enzyme';

import { SortingBlockView } from '../sorting-block-view';

describe('sorting-block', () => {
  describe('snapshot', () => {
    it('Snapshot button', () => {
      const button = shallow(<SortingBlockView />);

      expect(button).toMatchSnapshot();
    });
  });
});