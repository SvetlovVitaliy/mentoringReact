import React from 'react';
import { shallow } from 'enzyme';

import { DescriptionHeaderView } from '../description-header-view';

describe('description-header', () => {
  describe('snapshot', () => {
    const mockMovie = {
      poster_path: 'poster_path',
      genres: ['Action'],
      title: 'title',
      release_date: '2018',
      id: 1,
    };
    const mockQueryString = ['123', '456'];

    it('Snapshot button', () => {
      const onPress = jest.fn();
      const button = shallow(
        <DescriptionHeaderView
          movie={mockMovie}
          dispatch={onPress}
          queryString={mockQueryString}
        />);

      expect(button).toMatchSnapshot();
    });
  });
});