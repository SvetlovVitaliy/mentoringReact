import React from 'react';
import { shallow } from 'enzyme';

import { ButtonSearch } from '../button-search';

describe('button-search', () => {
  describe('snapshot', () => {
    it('Snapshot button', () => {
      const onPress = jest.fn();
      const button = shallow(<ButtonSearch onPress={onPress} />);

      expect(button).toMatchSnapshot();
    });
  });
});