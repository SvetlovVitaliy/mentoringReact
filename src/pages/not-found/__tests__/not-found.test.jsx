import React from 'react';
import { shallow } from 'enzyme';

import { NotFound } from '../not-found';

describe('not-found-page', () => {
  describe('snapshot', () => {
    it('snapshot', () => {
      const notFound = shallow(<NotFound />);

      expect(notFound).toMatchSnapshot();
    });
  });
});
