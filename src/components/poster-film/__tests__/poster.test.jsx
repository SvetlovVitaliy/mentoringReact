import React from 'react';
import { shallow } from 'enzyme';

import { Poster } from '../poster';
import { FilmInfo } from '../film-info';
import { YearFilm } from '../year-film';

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

    it('poster component', () => {
      const poster = shallow(<Poster movie={mockMovie} queryString={mockQueryParams} />);

      expect(poster).toMatchSnapshot();
    });

    it('film info component', () => {
      const poster = shallow(<FilmInfo title={mockMovie.title} gengre={mockMovie.genres[0]} year={mockMovie.release_date} />);

      expect(poster).toMatchSnapshot();
    });

    it('year film component', () => {
      const poster = shallow(<YearFilm year={mockMovie.release_date} />);

      expect(poster).toMatchSnapshot();
    });
  });
});