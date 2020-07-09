import React from 'react';
import { shallow } from 'enzyme';

import { PosterView } from '../poster-view';

describe('poster', () => {
  describe('snapshot', () => {
    const mockMovie = {
      poster_path: 'poster_path',
      genres: ['Action'],
      title: 'title',
      release_date: '2018',
      id: 1,
    };

    it('Snapshot button', () => {
      const button = shallow(<PosterView movie={mockMovie} />);

      expect(button).toMatchSnapshot();
    });
  });
});