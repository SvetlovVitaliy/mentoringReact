import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from '../home';

describe('home-page', () => {
  describe('snapshot', () => {
    it('snapshot', () => {
      const home = shallow(<HomePage />);

      expect(home).toMatchSnapshot();
    });
  });
});
