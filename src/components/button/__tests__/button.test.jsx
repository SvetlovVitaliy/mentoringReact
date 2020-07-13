import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '../';

describe('button', () => {
  const onPress = jest.fn();
  const title = 'onPress';
  const button = shallow(<Button title={title} onPress={onPress} />);

  describe('snapshot', () => {
    it('Snapshot button', () => {
      expect(button).toMatchSnapshot();
    });
  });

  describe('simulate click', () => {
    it('button click', () => {
      button.find('.button').simulate('click');
    });
  });
});