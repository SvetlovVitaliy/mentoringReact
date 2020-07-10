import React from 'react';
import { shallow } from 'enzyme';

import { Poster } from '../poster';

describe('poster', () => {
  describe('snapshot', () => {
    const mockMovie = {
      poster_path: 'poster_path',
      genres: ['Action'],
      title: 'title',
      release_date: '2018',
      id: 1,
    };
    const mockQueryParams = ['123', '456'];

    it('Snapshot button', () => {
      const button = shallow(<Poster movie={mockMovie} queryString={mockQueryParams} />);

      expect(button).toMatchSnapshot();
    });
  });
});