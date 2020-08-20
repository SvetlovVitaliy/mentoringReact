import React from 'react';
import { shallow } from 'enzyme';

import { SortingBlockView } from '../sorting-block-view';
import { TSortingOrder, TSortingType } from '../../../services/setting/utils';

describe('sorting-block', () => {
  describe('snapshot', () => {
    it('Snapshot button', () => {
      const onPress = jest.fn();
      const button = shallow(
        <SortingBlockView
          onclickRadioButton={onPress}
          sortOrder={TSortingOrder.ASK}
          sortBy={TSortingType.RATING}
        />
      );

      expect(button).toMatchSnapshot();
    });
  });
});