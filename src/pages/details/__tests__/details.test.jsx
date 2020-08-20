import React from 'react';
import { shallow } from 'enzyme';

import { DetailsPage } from '../details';

describe('details-page', () => {
  describe('snapshot', () => {
    it('details page', () => {
      const component = shallow(<DetailsPage />);

      expect(component).toMatchSnapshot();
    });
  });
});