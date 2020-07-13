import React from 'react';
import { shallow } from 'enzyme';

import { NotFoundPage } from '../not-page';

describe('not-found-page', () => {
  describe('snapshot', () => {
    it('snapshot', () => {
      const notFound = shallow(<NotFoundPage />);

      expect(notFound).toMatchSnapshot();
    });
  });
});
