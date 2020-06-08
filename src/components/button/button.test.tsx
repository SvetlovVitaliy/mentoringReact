import * as React from 'react';
import { shallow } from 'enzyme';

import { Button } from './button';

describe('button.jsx', () => {
  it('Snapshot button', () => {
    const onPress = jest.fn();
    const title = 'onPress';
    const button = shallow(<Button title={title} onPress={onPress} />);
    button.find('.button').simulate('click');

    expect(button).toMatchSnapshot();
  })
})