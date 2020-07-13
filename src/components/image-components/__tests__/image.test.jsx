import React from 'react';
import { shallow } from 'enzyme';

import { Image } from '../image';

describe('image', () => {
  describe('snapshot', () => {
    it('Snapshot image', () => {
      const image = shallow(<Image url={'mockQueryParams'} classNames={'string'} />);

      expect(image).toMatchSnapshot();
    });
  });
});